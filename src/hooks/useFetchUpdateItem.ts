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
  const requestConnector: string = data.connector
    .map((connector: { connector: string }) => '^' + connector.connector)
    .join('');
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
    image: data.image,
  };
  // create form data
  const formData = new FormData();
  formData.append('name', requestData.name);
  formData.append('visible_id', requestData.visible_id);
  formData.append('product_number', requestData.product_number);
  formData.append('description', requestData.description);
  formData.append('purchase_year', requestData.purchase_year === null ? '' : requestData.purchase_year.toString());
  formData.append('purchase_price', requestData.purchase_price === null ? '' : requestData.purchase_price.toString());
  formData.append('durability', requestData.durability === null ? '' : requestData.durability.toString());
  formData.append('is_depreciation', requestData.is_depreciation ? 'true' : 'false');
  formData.append('connector', requestData.connector);
  formData.append('color', requestData.color);
  formData.append(
    'image',
    new Blob([requestData.image[0]], { type: requestData.image[0].type }),
    requestData.image[0].name
  );
  // send
  const result: ErrorResponse | OkResponse = await fetch(`http://localhost:5000/api/item/update/${id}`, {
    method: 'PATCH',
    body: formData,
  })
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
