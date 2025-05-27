import { captureException } from '@sentry/react';
import { DepreiationCsvResponse } from '../models/depreiationCsvResponse';
import { ErrorResponse } from '../models/errorResponse';

export const useFetchDepreiationCsv = async (): Promise<DepreiationCsvResponse | ErrorResponse> => {
  // send
  const result: DepreiationCsvResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/csv/depreiation`,
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
