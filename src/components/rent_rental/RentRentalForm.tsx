import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../models/errorResponse';
import { OkResponse } from '../../models/okResponse';
import { Pending } from '../../models/pending';
import { rentalSchema, RentalSchemaType } from '../../validations/rental';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFetchRentRental } from '../../hooks/useFetchRentRental';
import styled from 'styled-components';
import { StyledInput } from '../../global';
import { StyledErrorMessageWrapper } from '../../global';

type Props = {
  id: string;
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

const StyledTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 400;
  text-align: center;
`;

const StyledBox = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  margin: 20px 0 5px 0;
  padding: 0;
`;

const StyledSubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0 10px 0;
`;

const StyledSubmitInput = styled.input`
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

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
    <StyledBox>
      <StyledTitle>貸し出し情報の登録</StyledTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="recipient">借用者</StyledLabel>
        <StyledInput id="recipient" type="text" {...register('recipient')} />
        <br />
        <StyledErrorMessageWrapper>
          <ErrorMessage errors={errors} name="recipient" message={errors.recipient?.message} />
        </StyledErrorMessageWrapper>
        <br />
        <StyledLabel htmlFor="rental_description">貸し出しに関する備考</StyledLabel>
        <StyledInput id="rental_description" type="text" {...register('rental_description')} />
        <br />
        <StyledErrorMessageWrapper>
          <ErrorMessage errors={errors} name="rental_description" message={errors.rental_description?.message} />
        </StyledErrorMessageWrapper>
        <br />
        <StyledLabel htmlFor="scheduled_replace_at">返却予定日</StyledLabel>
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
        <StyledErrorMessageWrapper>
          <ErrorMessage errors={errors} name="scheduled_replace_at" message={errors.scheduled_replace_at?.message} />
        </StyledErrorMessageWrapper>
        <br />
        <StyledSubmitWrapper>
          <StyledSubmitInput type="submit" value="貸し出し" />
        </StyledSubmitWrapper>
      </form>
    </StyledBox>
  );
};

export default RentRentalForm;
