import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';
import { Status } from '../models/status';
import { StatusColorRequest } from '../models/statusColorRequest';
import { UpdateColorFlag } from '../utils/flag';

export const useFetchUpdateColor = async (
  id: number,
  hex_color_code: string,
  status: Status,
  updateColorFlag: UpdateColorFlag
) => {
  if (updateColorFlag === 'status') {
    // reverse status
    status = status === 'Active' ? 'Archive' : 'Active';
  }
  const requestData: StatusColorRequest = {
    id: id,
    hex_color_code: hex_color_code,
    status: status,
  };
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/color/${id}`,
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
            code: 'status-color/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'status-color/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
