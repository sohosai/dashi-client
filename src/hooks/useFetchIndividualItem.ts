import { useEffect, useState } from 'react';
import { ErrorResponse } from '../model/errorResponse';
import { Pending } from '../model/pending';
import { IndividualItemResponse } from '../model/individualItemResponse';

export const useFetchIndividualItem = (id: string | undefined): IndividualItemResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<IndividualItemResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined && parseInt(id) >= 1) {
        // get jwt
        const jwt = window.localStorage.getItem('jwt');
        // send
        const data: IndividualItemResponse | ErrorResponse = await fetch(
          `${import.meta.env.VITE_DASHI_SERVER_ENDPOIN}/api/item/${id}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
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
