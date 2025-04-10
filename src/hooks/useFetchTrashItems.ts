import { useEffect, useState } from 'react';
import { ErrorResponse } from '../models/errorResponse';
import { Pending } from '../models/pending';
import { AllTrashItemsResponse } from '../models/allTrashItemResponse';
import { captureException } from '@sentry/react';

export const useFetchTrashItems = (): AllTrashItemsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<AllTrashItemsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      // send
      const data: AllTrashItemsResponse | ErrorResponse = await fetch(
        `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/trash`,
        {
          method: 'GET',
        }
      )
        .then((res) => {
          if (res.status === 200) {
            // 200 OK
            return res.json();
          } else {
            try {
              return res.json();
            } catch (error) {
              captureException(error);
              return {
                code: 'trash-item/unknown-error',
                message: 'UnknownError: Something went wrong.',
              };
            }
          }
        })
        .catch((error) => {
          captureException(error);
          return {
            code: 'trash-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        });
      setResult(data);
    };
    fetchData();
  }, []);
  return result;
};
