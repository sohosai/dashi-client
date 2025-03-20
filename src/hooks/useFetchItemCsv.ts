import { DASHI_SERVER_ENDPOINT } from '../env/env';
import { ErrorResponse } from '../model/errorResponse';
import { ItemCsvResponse } from '../model/itemCsvResponse';

export const useFetchItemCsv = async (): Promise<ItemCsvResponse | ErrorResponse> => {
  // get jwt
  const jwt = window.localStorage.getItem('jwt');
  // send
  const result: ItemCsvResponse | ErrorResponse = await fetch(`${DASHI_SERVER_ENDPOINT}/api/csv/item`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
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
            code: 'depreiation-csv/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'depreiation-csv/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });

  return result;
};
