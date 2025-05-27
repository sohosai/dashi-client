import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { GenerateRequest, Record } from '../models/generateRequest';
import { GenerateResponse } from '../models/generateResponse';

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
      credentials: 'include',
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
