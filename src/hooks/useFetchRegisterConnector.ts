import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { RegisterConnectorSchemaType } from '../validation/registerConnector';
import { RegisterConnectorRequest } from '../model/registerConnectorRequest';
import { DASHI_SERVER_ENDPOINT } from '../env/env';

export const useFetchRegisterConnector = async (
  data: RegisterConnectorSchemaType
): Promise<OkResponse | ErrorResponse> => {
  const requestData: RegisterConnectorRequest = {
    name: data.name,
  };
  // get jwt
  const jwt = window.localStorage.getItem('jwt');
  // send
  const result: OkResponse | ErrorResponse = await fetch(`${DASHI_SERVER_ENDPOINT}/api/connector`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
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
        } catch (e) {
          console.error(e);
          return {
            code: 'register-connector/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'register-connector/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
