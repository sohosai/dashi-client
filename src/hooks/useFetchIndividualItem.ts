import { useEffect, useState } from 'react';
import { ErrorResponse } from '../models/errorResponse';
import { Pending } from '../models/pending';
import { IndividualItemResponse } from '../models/individualItemResponse';
import { captureException } from '@sentry/react';

export const useFetchIndividualItem = (id: string | undefined): IndividualItemResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<IndividualItemResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined && parseInt(id) >= 1) {
        // send
        const data: IndividualItemResponse | ErrorResponse = await fetch(
          `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/item/${id}`,
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
              } catch (error) {
                captureException(error);
                return {
                  code: 'individual-item/unknown-error',
                  message: 'UnknownError: Something went wrong.',
                };
              }
            }
          })
          .catch((error) => {
            captureException(error);
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
