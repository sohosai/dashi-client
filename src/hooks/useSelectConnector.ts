import { useEffect, useState } from 'react';
import { AllSelectConnectorResponse, AllConnectorsResponse } from '../model/allConnectorsResponse';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { DASHI_SERVER_ENDPOINT } from '../env/env';

export const useSelectConnector = (): ErrorResponse | Pending | AllSelectConnectorResponse => {
  const [result, setResult] = useState<AllSelectConnectorResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data: AllConnectorsResponse | ErrorResponse = await fetch(`${DASHI_SERVER_ENDPOINT}/api/connector`, {
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
