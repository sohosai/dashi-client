import { DASHI_SERVER_ENDPOINT } from '../env/env';
import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { RegisterColorRequest } from '../model/registerColorRequest';
import { RegisterColorSchemaType } from '../validation/registerColor';

export const useFetchRegisterColor = async (data: RegisterColorSchemaType): Promise<OkResponse | ErrorResponse> => {
  const requestData: RegisterColorRequest = {
    name: data.name,
    hex_color_code: data.hex_color_code,
  };
  // get jwt
  const jwt = window.localStorage.getItem('jwt');
  // send
  const result: OkResponse | ErrorResponse = await fetch(`${DASHI_SERVER_ENDPOINT}/api/color`, {
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
            code: 'register-color/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'register-color/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
