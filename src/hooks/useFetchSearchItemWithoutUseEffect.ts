import { captureException } from '@sentry/react';
import { ErrorResponse } from '../models/errorResponse';
import { Pending } from '../models/pending';
import { SearchItemsResponse } from '../models/searchItemResponse';

export const useFetchSearchItemWithoutUseEffect = async (
  keywords: string
): Promise<SearchItemsResponse | ErrorResponse | Pending> => {
  let result: SearchItemsResponse | ErrorResponse | Pending = 'pending';

  if (keywords !== undefined && keywords !== '') {
    // send
    result = await fetch(`${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/search?keywords=${keywords}`, {
      method: 'GET',
    })
      .then((res) => {
        if (res.status === 200) {
          // 200 OK
          return res.json();
        } else {
          // error
          try {
            return res.json();
          } catch (error) {
            captureException(error);
            return {
              code: 'search-item/unknown-error',
              message: 'UnknownError: Something went wrong.',
            };
          }
        }
      })
      .catch((error) => {
        captureException(error);
        return {
          code: 'search-item/unknown-error',
          message: 'UnknownError: Something went wrong.',
        };
      });
  }

  return result;
};
