import { DepreiationCsvResponse } from '../model/depreiationCsvResponse';
import { ErrorResponse } from '../model/errorResponse';

export const useFetchDepreiationCsv = async (): Promise<DepreiationCsvResponse | ErrorResponse> => {
  const result: DepreiationCsvResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER}/api/csv/depreiation`,
    {
      method: 'GET',
    }
  )
    .then((res) => {
      if (res.status === 200) {
        // 200 OK
        return res.json();
      } else {
        // error
        try {
          return res.json();
        } catch (e) {
          console.error(e);
          return {
            code: 'depreiation-csv/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'depreiation-csv/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });

  return result;
};
