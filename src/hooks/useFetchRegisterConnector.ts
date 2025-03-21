import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { RegisterConnectorSchemaType } from '../validation/registerConnector';
import { RegisterConnectorRequest } from '../model/registerConnectorRequest';

export const useFetchRegisterConnector = async (
  data: RegisterConnectorSchemaType
): Promise<OkResponse | ErrorResponse> => {
  const requestData: RegisterConnectorRequest = {
    name: data.name,
  };
  // get jwt
  const jwt = window.localStorage.getItem('jwt');
  // send
  const result: OkResponse | ErrorResponse = await fetch(`${import.meta.env.VITE_DASHI_SERVER_ENDPOIN}/api/connector`, {
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
