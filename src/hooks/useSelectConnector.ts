import { useEffect, useState } from 'react';
import { AllSelectConnectorResponse, AllConnectorsResponse } from '../models/allConnectorsResponse';
import { ErrorResponse } from '../models/errorResponse';
import { Pending } from '../models/pending';
import { captureException } from '@sentry/react';

export const useSelectConnector = (): ErrorResponse | Pending | AllSelectConnectorResponse => {
  const [result, setResult] = useState<AllSelectConnectorResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // send
      const data: AllConnectorsResponse | ErrorResponse = await fetch(
        `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/connector`,
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
      if ('all_connectors' in data) {
        const convertedData: AllSelectConnectorResponse = {
          all_connectors: data.all_connectors.map((connector) => ({
            id: connector.id,
            label: connector.name,
            value: connector.name,
            status: connector.status,
          })),
        };
        setResult(convertedData);
      } else {
        setResult(data);
      }
    };
    fetchData();
  }, []);
  return result;
};
