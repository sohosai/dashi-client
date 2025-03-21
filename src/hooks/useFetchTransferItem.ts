import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { TransferItemRequest } from '../model/transferItemRequest';

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
  // get jwt
  const jwt = window.localStorage.getItem('jwt');
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/transfer`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${jwt}`,
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
        } catch (e) {
          console.error(e);
          return {
            code: 'transfer-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'transfer-item/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });

  return result;
};
