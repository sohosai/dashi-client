import { useEffect, useState } from 'react';
import { ErrorResponse } from '../models/errorResponse';
import { Pending } from '../models/pending';
import { SearchItemsResponse } from '../models/searchItemResponse';
import { captureException } from '@sentry/react';

export const useFetchSearchItemWithUseEffect = (keywords: string): SearchItemsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<SearchItemsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      if (keywords !== undefined && keywords !== '') {
        // send
        const data: SearchItemsResponse | ErrorResponse = await fetch(
          `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/search?keywords=${keywords}`,
          {
            method: 'GET',
            credentials: 'include',
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
                  code: 'search-item/unknown-error',
                  message: 'UnknownError: Something went wrong.',
                };
              }
            }
          })
          .catch((error) => {
            captureException(error);
            return {
              code: 'search-item/unknown-error',
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
