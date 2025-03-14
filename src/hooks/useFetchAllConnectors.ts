import { useEffect, useState } from 'react';
import { AllConnectorsResponse } from '../model/allConnectorsResponse';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';

export const useFetchAllConnectors = (): ErrorResponse | Pending | AllConnectorsResponse => {
  const [result, setResult] = useState<AllConnectorsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data: AllConnectorsResponse | ErrorResponse = await fetch(
        `${import.meta.env.VITE_DASHI_SERVER}/api/connector`,
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
            } catch (e) {
              console.error(e);
              return {
                code: 'all-connectors/unknown-error',
                message: 'UnknownError: Something went wrong.',
              };
            }
          }
        })
        .catch((err) => {
          console.error(err);
          return {
            code: 'all-connectorsm/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        });
      setResult(data);
    };
    fetchData();
  }, []);
  return result;
};
