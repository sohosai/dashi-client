import { captureException } from '@sentry/react';
import { ErrorResponse } from '../model/errorResponse';
import { GenerateRequest, Record } from '../model/generateRequest';
import { GenerateResponse } from '../model/generateResponse';

export const useFetchGenerate = async (quantity: number, record: Record): Promise<GenerateResponse | ErrorResponse> => {
  const requestData: GenerateRequest = {
    quantity: quantity,
    record: record,
  };
  // send
  const result: GenerateResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/generate`,
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
        return res.json();
      } else {
        // error
        try {
          return res.json();
        } catch (error) {
          captureException(error);
          return {
            code: 'generate/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'generate/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });

  return result;
};
