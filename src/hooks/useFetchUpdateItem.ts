import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';
import { UpdateItemRequest } from '../models/updateItemRequest';
import { UpdateItemSchemaType } from '../validations/updateItem';

export const useFetchUpdateItem = async (
  data: UpdateItemSchemaType,
  id: number
): Promise<OkResponse | ErrorResponse> => {
  // conver from zod schema to api schema
  const requestPurchaseYear: number | null = Number.isNaN(data.purchase_year) ? null : data.purchase_year;
  const requestPurchasePrice: number | null = Number.isNaN(data.purchase_price) ? null : data.purchase_price;
  const requestDurability: number | null = Number.isNaN(data.durability) ? null : data.durability;
  const requestConnector: string[] = data.connector.map((connector: { connector: string }) => connector.connector);
  const requestColor: string = data.color.map((color: { color: string }) => color.color).join('^');
  const requestData: UpdateItemRequest = {
    name: data.name,
    visible_id: data.visible_id,
    product_number: data.product_number,
    description: data.description,
    purchase_year: requestPurchaseYear,
    purchase_price: requestPurchasePrice,
    durability: requestDurability,
    is_depreciation: data.is_depreciation,
    connector: requestConnector,
    color: requestColor,
  };
  // send
  const result: ErrorResponse | OkResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/update/${id}`,
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
            code: 'update-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'update-item/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
