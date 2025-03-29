import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { RentalSchemaType } from '../validation/rental';
import { RentalRequest } from '../model/rentalRequest';
import { captureException } from '@sentry/react';

export const useFetchRentRental = async (id: number, data: RentalSchemaType): Promise<OkResponse | ErrorResponse> => {
  // conver from zod schema to api schema
  const requestData: RentalRequest = {
    id: id,
    recipient: data.recipient,
    rental_description: data.rental_description,
    scheduled_replace_at: data.scheduled_replace_at,
  };
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/rental/rent/${id}`,
    {
      method: 'PATCH',
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
            code: 'rent-rental/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'rent-rental/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
