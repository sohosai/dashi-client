import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { DASHI_SERVER_ENDPOINT } from '../env/env';
import { AllRentalItemsResponse } from '../model/allRentalItemsResponse';

export const useFetchAllRentalItems = (): AllRentalItemsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<AllRentalItemsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      const data: AllRentalItemsResponse | ErrorResponse = await fetch(`${DASHI_SERVER_ENDPOINT}/api/rental`, {
        method: 'GET',
      })
        .then((res) => {
          if (res.status === 200) {
            // 200 OK
            return res.json();
          } else {
            try {
              return res.json();
            } catch (e) {
              console.error(e);
              return {
                code: 'all-trash-items/unknown-error',
                message: 'UnknownError: Something went wrong.',
              };
            }
          }
        })
        .catch((err) => {
          console.error(err);
          return {
            code: 'all-trash-items/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        });
      setResult(data);
    };
    fetchData();
  }, []);
  return result;
};
