import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { AllColorsResponse } from '../model/allColorsResponse';
import { DASHI_SERVER_ENDPOINT } from '../env/env';

export const useFetchAllColors = (): AllColorsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<AllColorsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data: AllColorsResponse | ErrorResponse = await fetch(`${DASHI_SERVER_ENDPOINT}/api/color`, {
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
                code: 'all-colors/unknown-error',
                message: 'UnknownError: Something went wrong.',
              };
            }
          }
        })
        .catch((err) => {
          console.error(err);
          return {
            code: 'all-colors/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        });
      setResult(data);
    };
    fetchData();
  }, []);
  return result;
};
