import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { UpdateItemRequest } from '../model/updateItemRequest';
import { UpdateItemSchemaType } from '../validation/updateItem';

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
  // get jwt
  const jwt = window.localStorage.getItem('jwt');
  // send
  const result: ErrorResponse | OkResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/update/${id}`,
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
            code: 'update-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'update-item/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
