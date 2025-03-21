import { ErrorResponse } from '../model/errorResponse';
import { OkResponse } from '../model/okResponse';
import { ImageItemSchemaType } from '../validation/ImageItem';

export const useFetchImageItem = async (id: number, data: ImageItemSchemaType): Promise<OkResponse | ErrorResponse> => {
  // create form data
  const formData = new FormData();
  formData.append('image', new Blob([data.image[0]], { type: data.image[0].type }), data.image[0].name);
  // get jwt
  const jwt = window.localStorage.getItem('jwt');
  // send
  const result: OkResponse | ErrorResponse = await fetch(
    `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/image/${id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
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
        } catch (e) {
          console.error(e);
          return {
            code: 'image-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        }
      }
    })
    .catch((e) => {
      console.error(e);
      return {
        code: 'image-item/unknown-error',
        message: 'UnknownError: Something went wrong.',
      };
    });
  return result;
};
