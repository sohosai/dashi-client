import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';

export const useFetchReplaceRental = async (id: number): Promise<OkResponse | ErrorResponse> => {
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/rental/replace/${id}`,
    {
      method: 'PATCH',
      credentials: 'include',
    }
  )
    .then((res) => {
      if (res.status === 200) {
        // 200 OK
        return 'ok';
      } else {
        // error
        try {
          return res.json();
        } catch (error) {
          captureException(error);
          return {
            code: 'replace-rental/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'replace-rental/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });

  return result;
};
