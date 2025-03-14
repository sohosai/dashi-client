import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';

export const useFetchReplaceRental = async (id: number): Promise<OkResponse | ErrorResponse> => {
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER}/api/rental/replace/${id}`,
    {
      method: 'PATCH',
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
        } catch (e) {
          console.error(e);
          return {
            code: 'replace-rental/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'replace-rental/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });

  return result;
};
