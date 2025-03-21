import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { SearchItemsResponse } from '../model/searchItemResponse';

export const useFetchSearchItemWithoutUseEffect = async (
  keywords: string
): Promise<SearchItemsResponse | ErrorResponse | Pending> => {
  let result: SearchItemsResponse | ErrorResponse | Pending = 'pending';

  if (keywords !== undefined && keywords !== '') {
    // get jwt
    const jwt = window.localStorage.getItem('jwt');
    // send
    result = await fetch(`${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/search?keywords=${keywords}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          // 200 OK
          return res.json();
        } else {
          // error
          try {
            return res.json();
          } catch (e) {
            console.error(e);
            return {
              code: 'search-item/unknown-error',
              message: 'UnknownError: Something went wrong.',
            };
          }
        }
      })
      .catch((e) => {
        console.error(e);
        return {
          code: 'search-item/unknown-error',
          message: 'UnknownError: Something went wrong.',
        };
      });
  }

  return result;
};
