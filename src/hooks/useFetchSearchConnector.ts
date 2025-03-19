import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { SearchConnectorsResponse } from '../model/searchConnectorResponse';
import { DASHI_SERVER_ENDPOINT } from '../env/env';

export const useFetchSearchConnector = (keywords: string): SearchConnectorsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<SearchConnectorsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      if (keywords !== undefined && keywords !== '') {
        const data: SearchConnectorsResponse | ErrorResponse = await fetch(
          `${DASHI_SERVER_ENDPOINT}/api/connector/search?keywords=${keywords}`,
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
                  code: 'search-connector/unknown-error',
                  message: 'UnknownError: Something went wrong.',
                };
              }
            }
          })
          .catch((e) => {
            console.error(e);
            return {
              code: 'search-connector/unknown-error',
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
