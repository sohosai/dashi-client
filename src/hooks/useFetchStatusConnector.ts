import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { Status } from '../model/status';
import { StatusConnectorRequest } from '../model/statusConnectorRequest';

export const useFetchStatusConnector = async (id: number, status: Status) => {
  // reverse status
  status = status === 'Active' ? 'Archive' : 'Active';
  const requestData: StatusConnectorRequest = {
    id: id,
    status: status,
  };
  // send
  const result: OkResponse | ErrorResponse = await fetch(`${import.meta.env.VITE_DASHI_SERVER}/api/connector/${id}`, {
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
            code: 'status-connector/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'status-connector/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
