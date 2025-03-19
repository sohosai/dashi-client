import { DASHI_SERVER_ENDPOINT } from '../env/env';
import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { Status } from '../model/status';
import { StatusColorRequest } from '../model/statusColorRequest';

export const useFetchUpdateColor = async (id: number, hex_color_code: string, status: Status) => {
  // reverse status
  status = status === 'Active' ? 'Archive' : 'Active';
  const requestData: StatusColorRequest = {
    id: id,
    hex_color_code: hex_color_code,
    status: status,
  };
  // send
  const result: OkResponse | ErrorResponse = await fetch(`${DASHI_SERVER_ENDPOINT}/api/color/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((res) => {
      if (res.status === 200) {
        // 200 OK
        return 'ok';
      } else {
        // error
        try {
          return res.json();
        } catch (e) {
          console.error(e);
          return {
            code: 'status-color/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'status-color/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
