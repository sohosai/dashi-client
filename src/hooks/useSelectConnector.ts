import { useEffect, useState } from 'react';
import { AllSelectConnectorResponse, AllConnectorsResponse } from '../model/allConnectorsResponse';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { captureException } from '@sentry/react';

export const useSelectConnector = (): ErrorResponse | Pending | AllSelectConnectorResponse => {
  const [result, setResult] = useState<AllSelectConnectorResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // get jwt
      const jwt = window.localStorage.getItem('jwt');
      // send
      const data: AllConnectorsResponse | ErrorResponse = await fetch(
        `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/connector`,
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
