import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';
import { RegisterConnectorSchemaType } from '../validations/registerConnector';
import { RegisterConnectorRequest } from '../models/registerConnectorRequest';
import { captureException } from '@sentry/react';

export const useFetchRegisterConnector = async (
  data: RegisterConnectorSchemaType
): Promise<OkResponse | ErrorResponse> => {
  const requestData: RegisterConnectorRequest = {
    name: data.name,
  };
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/connector`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }
  )
    .then((res) => {
      if (res.status === 201) {
        // 201 Created
        return 'ok';
      } else {
        // error
        try {
          return res.json();
        } catch (error) {
          captureException(error);
          return {
            code: 'register-connector/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'register-connector/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
