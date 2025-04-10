import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';
import { TransferItemRequest } from '../models/transferItemRequest';

export const useFetchTransferItem = async (id: number, parent_id: number): Promise<OkResponse | ErrorResponse> => {
  // validation
  if (id === parent_id) {
    return {
      code: 'transfer-item/cannot-transfer-to-own-item',
      message: 'TransferOwnItemError: Cannot transfer to own item.',
    };
  }
  const requestData: TransferItemRequest = {
    id: id,
    new_parent_id: parent_id,
  };
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/transfer`,
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
            code: 'transfer-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'transfer-item/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });

  return result;
};
