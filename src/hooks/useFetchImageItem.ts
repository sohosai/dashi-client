import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { OkResponse } from '../models/okResponse';
import { ImageItemSchemaType } from '../validations/imageItem';

export const useFetchImageItem = async (id: number, data: ImageItemSchemaType): Promise<OkResponse | ErrorResponse> => {
  // create form data
  const formData = new FormData();
  formData.append('image', new Blob([data.image[0]], { type: data.image[0].type }), data.image[0].name);
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/image/${id}`,
    {
      method: 'PUT',
      credentials: 'include',
      body: formData,
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
            code: 'image-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((error) => {
      captureException(error);
      return {
        code: 'image-item/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
