import { useEffect, useState } from 'react';
import { ErrorResponse } from '../models/errorResponse';
import { Pending } from '../models/pending';
import { AllSelectColorResponse, AllColorsResponse } from '../models/allColorsResponse';
import { captureException } from '@sentry/react';

export const useSelectColor = (): AllSelectColorResponse | ErrorResponse | Pending => {
  const [result, setResult] = useState<AllSelectColorResponse | ErrorResponse | Pending>('pending');
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // send
      const data: AllColorsResponse | ErrorResponse = await fetch(
        `${import.meta.env.VITE_DASHI_SERVER_ENDPOINT}/api/color`,
        {
          method: 'GET',
          credentials: 'include',
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
                code: 'all-colors/unknown-error',
                message: 'UnknownError: Something went wrong.',
              };
            }
          }
        })
        .catch((error) => {
          captureException(error);
          return {
            code: 'all-colors/unknown-error',
            message: 'UnknownError: Something went wrong.',
          };
        });
      if ('all_colors' in data) {
        const convertedData: AllSelectColorResponse = {
          all_colors: data.all_colors.map((color) => ({
            id: color.id,
            label: color.name,
            value: color.name,
            hex_color_code: color.hex_color_code,
            status: color.status,
          })),
        };
        setResult(convertedData);
      } else {
        setResult(data);
      }
    };
    fetchData();
  }, []);
  return result;
};
