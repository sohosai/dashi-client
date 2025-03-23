import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { AllTrashItemsResponse } from '../model/allTrashItemResponse';
import { captureException } from '@sentry/react';

export const useFetchTrashItems = (): AllTrashItemsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<AllTrashItemsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      // get jwt
      const jwt = window.localStorage.getItem('jwt');
      // send
      const data: AllTrashItemsResponse | ErrorResponse = await fetch(
        `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/trash`,
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
