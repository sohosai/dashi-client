import { captureException } from '@sentry/react';
import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';

export const useFetchReplaceRental = async (id: number): Promise<OkResponse | ErrorResponse> => {
  // get jwt
  const jwt = window.localStorage.getItem('jwt');
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/rental/replace/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
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
