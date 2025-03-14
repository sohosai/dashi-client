import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { TrashItemsResponse } from '../model/trashItemResponse';

export const useFetchTrashItem = (): TrashItemsResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<TrashItemsResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      const data: TrashItemsResponse | ErrorResponse = await fetch(
        `${import.meta.env.VITE_DASHI_SERVER}/api/item/trash`,
        {
          method: 'GET',
        }
      )
        .then((res) => {
          if (res.status === 200) {
            // 200 OK
            return res.json();
          } else {
            try {
              return res.json();
            } catch (e) {
              console.error(e);
              return {
                code: 'trash-item/unknown-error',
                message: 'UnknownError: Something went wrong.',
              };
            }
          }
        })
        .catch((err) => {
          console.error(err);
          return {
            code: 'itrash-item/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        });
      setResult(data);
    };
    fetchData();
  }, []);
  return result;
};
