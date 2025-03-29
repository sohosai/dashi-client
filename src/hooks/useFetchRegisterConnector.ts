import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { RegisterConnectorSchemaType } from '../validation/registerConnector';
import { RegisterConnectorRequest } from '../model/registerConnectorRequest';
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
