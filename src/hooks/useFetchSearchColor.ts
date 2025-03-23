import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { SearchColorsResponse } from '../model/searchColorResponse';
import { captureException } from '@sentry/react';

export const useFetchSearchColor = (keywords: string): SearchColorsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<SearchColorsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      if (keywords !== undefined && keywords !== '') {
        // get jwt
        const jwt = window.localStorage.getItem('jwt');
        // send
        const data: SearchColorsResponse | ErrorResponse = await fetch(
          `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/color/search?keywords=${keywords}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        )
          .then((res) => {
            if (res.status === 200) {
              // 200 OK
              return res.json();
            } else {
              // error
              try {
                return res.json();
              } catch (error) {
                captureException(error);
                return {
                  code: 'search-color/unknown-error',
                  message: 'UnknownError: Something went wrong.',
                };
              }
            }
          })
          .catch((error) => {
            captureException(error);
            return {
              code: 'search-color/unknown-error',
              message: 'UnknownError: Something went wrong.',
            };
          });
        setResult(data);
      }
    };
    fetchData();
  }, [keywords]);
  return result;
};
