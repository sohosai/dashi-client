import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';
import { RegisterColorRequest } from '../models/registerColorRequest';
import { RegisterColorSchemaType } from '../validations/registerColor';

export const useFetchRegisterColor = async (data: RegisterColorSchemaType): Promise<OkResponse | ErrorResponse> => {
  const requestData: RegisterColorRequest = {
    name: data.name,
    hex_color_code: data.hex_color_code,
  };
  // send
  const result: OkResponse | ErrorResponse = await fetch(`${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/color`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
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
            code: 'register-color/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'register-color/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
