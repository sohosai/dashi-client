import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { SearchConnectorsResponse } from '../model/searchConnectorResponse';
import { captureException } from '@sentry/react';

export const useFetchSearchConnector = (keywords: string): SearchConnectorsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<SearchConnectorsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      if (keywords !== undefined && keywords !== '') {
        // get jwt
        const jwt = window.localStorage.getItem('jwt');
        // send
        const data: SearchConnectorsResponse | ErrorResponse = await fetch(
          `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/connector/search?keywords=${keywords}`,
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
                  code: 'search-connector/unknown-error',
                  message: 'UnknownError: Something went wrong.',
                };
              }
            }
          })
          .catch((error) => {
            captureException(error);
            return {
              code: 'search-connector/unknown-error',
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
