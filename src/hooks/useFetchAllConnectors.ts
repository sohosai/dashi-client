import { useEffect, useState } from 'react';
import { AllConnectorsResponse } from '../models/allConnectorsResponse';
import { ErrorResponse } from '../models/errorResponse';
import { Pending } from '../models/pending';
import { captureException } from '@sentry/react';

export const useFetchAllConnectors = (): ErrorResponse | Pending | AllConnectorsResponse => {
  const [result, setResult] = useState<AllConnectorsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // send
      const data: AllConnectorsResponse | ErrorResponse = await fetch(
        `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/connector`,
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
                code: 'all-connectors/unknown-error',
                message: 'UnknownError: Something went wrong.',
              };
            }
          }
        })
        .catch((error) => {
          captureException(error);
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
