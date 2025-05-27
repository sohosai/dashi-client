import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';
import { Status } from '../models/status';
import { StatusConnectorRequest } from '../models/statusConnectorRequest';

export const useFetchStatusConnector = async (id: number, status: Status) => {
  // reverse status
  status = status === 'Active' ? 'Archive' : 'Active';
  const requestData: StatusConnectorRequest = {
    id: id,
    status: status,
  };
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/connector/${id}`,
    {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
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
            code: 'status-connector/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'status-connector/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
