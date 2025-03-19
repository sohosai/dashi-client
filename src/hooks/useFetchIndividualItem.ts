import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { IndividualItemResponse } from '../model/individualItemResponse';
import { DASHI_SERVER_ENDPOINT } from '../env/env';

export const useFetchIndividualItem = (id: string | undefined): IndividualItemResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<IndividualItemResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined && parseInt(id) >= 1) {
        const data: IndividualItemResponse | ErrorResponse = await fetch(`${DASHI_SERVER_ENDPOINT}/api/item/${id}`, {
          method: 'GET',
        })
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
                  code: 'individual-item/unknown-error',
                  message: 'UnknownError: Something went wrong.',
                };
              }
            }
          })
          .catch((err) => {
            console.error(err);
            return {
              code: 'individual-item/unknown-error',
              message: 'UnknownError: Something went wrong.',
            };
          });
        setResult(data);
      } else {
        setResult({
          code: 'individual-item/invalid-id',
          message: 'IdNotFoundInItemTableError: Invalid id.',
        });
      }
    };
    fetchData();
  }, [id]);
  return result;
};
