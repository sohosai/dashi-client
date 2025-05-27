import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';
import { RentalSchemaType } from '../validations/rental';
import { RentalRequest } from '../models/rentalRequest';
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
