import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../model/errorResponse';
import { OkResponse } from '../../model/okResponse';
import { Pending } from '../../model/pending';
import { rentalSchema, RentalSchemaType } from '../../validation/rental';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFetchRentRental } from '../../hooks/useFetchRentRental';

type Props = {
  id: string;
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

const RentRentalForm: FC<Props> = (props) => {
  const [cleared, setCleared] = useState<boolean>(false);
  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 10);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RentalSchemaType>({
    resolver: zodResolver(rentalSchema),
  });
  const onSubmit: SubmitHandler<RentalSchemaType> = async (formData) => {
    console.table(formData);
    props.setResult('pending');
    const result: ErrorResponse | OkResponse = await useFetchRentRental(parseInt(props.id), formData);
    props.setResult(result);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="recipient">recipient: </label>
      <input id="recipient" type="text" {...register('recipient')} />
      <br />
      <ErrorMessage errors={errors} name="recipient" message={errors.recipient?.message} />
      <br />
      <label htmlFor="rental_description">rental_description: </label>
      <input id="rental_description" type="text" {...register('rental_description')} />
      <br />
      <ErrorMessage errors={errors} name="rental_description" message={errors.rental_description?.message} />
      <br />
      <label htmlFor="scheduled_replace_at">scheduled_replace_at: </label>
      <Controller
        name="scheduled_replace_at"
        control={control}
        render={({ field }) => (
          <LocalizationProvider {...field} dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="scheduled_replace_at"
              onChange={(value) =>
                field.onChange(value === null ? '' : dayjs(value).format('YYYY-MM-DD[T]HH:mm:ss[Z]'))
              }
              format="YYYY/MM/DD"
              slotProps={{
                calendarHeader: { format: 'YYYY年MM月' },
                field: { clearable: true, onClear: () => setCleared(true) },
              }}
            />
          </LocalizationProvider>
        )}
      />
      <br />
      <ErrorMessage errors={errors} name="scheduled_replace_at" message={errors.scheduled_replace_at?.message} />
      <br />
      <input type="submit" value="貸し出し" />
    </form>
  );
};

export default RentRentalForm;
