import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { SearchItemsResponse } from '../model/searchItemResponse';

export const useFetchSearchItemWithUseEffect = (keywords: string): SearchItemsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<SearchItemsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      if (keywords !== undefined && keywords !== '') {
        const data: SearchItemsResponse | ErrorResponse = await fetch(
          `${import.meta.env.VITE_DASHI_SERVER}/api/item/search?keywords=${keywords}`,
          { method: 'GET' }
        )
          .then((res) => {
            if (res.status === 200) {
              // 200 OK
              return res.json();
            } else {
              // error
              try {
                return res.json();
              } catch (e) {
                console.error(e);
                return {
                  code: 'search-item/unknown-error',
                  message: 'UnknownError: Something went wrong.',
                };
              }
            }
          })
          .catch((e) => {
            console.error(e);
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
