import { ErrorResponse } from '../models/errorResponse';
import { RegisterItemRequest } from '../models/registerItemRequest';
import { RegisterItemSchemaType } from '../validations/registerItem';
import { OkResponse } from '../models/okResponse';
import { captureException } from '@sentry/react';

export const useFetchRegisterItem = async (data: RegisterItemSchemaType): Promise<OkResponse | ErrorResponse> => {
  // convert from zod schema to api schema
  const requestPurchaseYear: number | null = Number.isNaN(data.purchase_year) ? null : data.purchase_year;
  const requestPurchasePrice: number | null = Number.isNaN(data.purchase_price) ? null : data.purchase_price;
  const requestDurability: number | null = Number.isNaN(data.durability) ? null : data.durability;
  const requestConnector: string = data.connector
    .map((connector: { connector: string }) => '^' + connector.connector)
    .join('');
  const requestColor: string = data.color.map((color: { color: string }) => color.color).join('^');
  const requestData: RegisterItemRequest = {
    name: data.name,
    visible_id: data.visible_id,
    parent_visible_id: data.parent_visible_id,
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
  formData.append('parent_visible_id', requestData.parent_visible_id);
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
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/register`,
    {
      method: 'POST',
      credentials: 'include',
      body: formData,
    }
  )
    .then((res) => {
      if (res.status === 201) {
        // 201 Created
        return 'ok';
      } else {
        // error
        try {
          return res.json();
        } catch (error) {
          captureException(error);
          return {
            code: 'register-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'register-item/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
