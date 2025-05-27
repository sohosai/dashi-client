import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { ItemCsvResponse } from '../models/itemCsvResponse';

export const useFetchItemCsv = async (): Promise<ItemCsvResponse | ErrorResponse> => {
  // send
  const result: ItemCsvResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/csv/item`,
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
        // error
        try {
          return res.json();
        } catch (error) {
          captureException(error);
          return {
            code: 'depreiation-csv/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'depreiation-csv/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });

  return result;
};
