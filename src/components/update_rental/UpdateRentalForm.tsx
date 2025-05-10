import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../models/errorResponse';
import { OkResponse } from '../../models/okResponse';
import { Pending } from '../../models/pending';
import { rentalSchema, RentalSchemaType } from '../../validations/rental';
import { IndividualItemResponse } from '../../models/individualItemResponse';
import { useFetchUpdateRental } from '../../hooks/useFetchUpdateRental';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { styled, createGlobalStyle } from 'styled-components';
import { StyledInput } from '../../global';
import { StyledErrorMessageWrapper } from '../../global';

type Props = {
  individualItem: IndividualItemResponse;
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

const StyledDesktopDatePicker = styled(DesktopDatePicker)`
  display: block;
  border: none;
  margin: 0;
  padding: 0;
  width: 400px;
  & .MuiInputBase-input {
    height: 51px;
    margin: 0;
    padding: 0 0 0 14px;
  }
  // 参考: https://muhimasri.com/blogs/mui-textfield-colors-styles/
  // Root class for the input field
  & .MuiOutlinedInput-root {
    color: #000000;
    font-size: 1.6rem;
    font-family: 'Noto Serif JP', serif;
    border: 1.5px solid #6f6f6f;
    border-radius: 0;
    // Class for the border around the input field
    & .MuiOutlinedInput-notchedOutline {
      border-radius: 0;
      border: none;
    }
    // Class for the input field when it is focused
    & .Mui-focused {
      outline: 2.5px solid #c7d01c;
    }
  }

  & .MuiDayCalendar-root {
    font-size: 1.6rem !important;
    font-family: 'Noto Serif JP', serif !important;
  }
`;

const GlobalDatePickerStyle = createGlobalStyle`
  // Class for calender popup
  .MuiPickersPopper-root {
    .MuiPickersCalendarHeader-label,
    .MuiDayCalendar-weekDayLabel,
    .MuiPickersYear-yearButton,
    .MuiButtonBase-root {
      font-size: 1.4rem !important;
      font-family: 'Noto Serif JP', serif !important;
    }
    .MuiSvgIcon-root {
      width: 2rem !important;
      height: 2rem !important;
    }
  }
  // Class for calender icon button
  .MuiInputAdornment-root .MuiSvgIcon-root {
    width: 2rem !important;
    height: 2rem !important;
  }
  // Class for calender icon button
  .MuiIconButton-root .MuiSvgIcon-root {
    width: 2rem !important;
    height: 2rem !important;
  }
`;

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

const UpdateRentalForm: FC<Props> = (props) => {
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
    defaultValues: {
      recipient: props.individualItem === null ? '' : props.individualItem.recipient,
      rental_description: props.individualItem === null ? '' : props.individualItem.rental_description,
      scheduled_replace_at:
        props.individualItem === null
          ? ''
          : props.individualItem.scheduled_replace_at === null
          ? ''
          : dayjs(props.individualItem.scheduled_replace_at).format('YYYY-MM-DD[T00:00:00Z]'),
    },
  });
  const onSubmit: SubmitHandler<RentalSchemaType> = async (formData) => {
    console.table(formData);
    props.setResult('pending');
    const result: ErrorResponse | OkResponse = await useFetchUpdateRental(props.individualItem.id, formData);
    props.setResult(result);
  };
  return (
    <StyledBox>
      <StyledTitle>貸し出し情報の更新</StyledTitle>
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
        <GlobalDatePickerStyle />
        <Controller
          name="scheduled_replace_at"
          control={control}
          render={({ field }) => (
            <LocalizationProvider {...field} dateAdapter={AdapterDayjs}>
              <StyledDesktopDatePicker
                defaultValue={field.value === '' ? null : dayjs(field.value)}
                onChange={(value) =>
                  field.onChange(value === null ? '' : dayjs(value).format('YYYY-MM-DD[T00:00:00Z]'))
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
          <ErrorMessage errors={errors} name="scheduled_replace_at" message={errors.rental_description?.message} />
        </StyledErrorMessageWrapper>
        <br />
        <StyledSubmitWrapper>
          <StyledSubmitInput type="submit" value="貸し出し情報の更新" />
        </StyledSubmitWrapper>
      </form>
    </StyledBox>
  );
};

export default UpdateRentalForm;
