import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../../models/errorResponse';
import { OkResponse } from '../../../models/okResponse';
import { Pending } from '../../../models/pending';
import { registerColorSchema, RegisterColorSchemaType } from '../../../validations/registerColor';
import { useFetchRegisterColor } from '../../../hooks/useFetchRegisterColor';
import { MuiColorInput } from 'mui-color-input';
import styled from 'styled-components';
import { StyledInput } from '../../../global';

type Props = {
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

const StyledLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  margin: 20px 0 5px 0;
  padding: 0;
`;

const StyledMuiColorInput = styled(MuiColorInput)`
  display: block;
  border: none;
  margin: 0;
  padding: 0;
  width: 400px;
  & .MuiInputBase-input {
    height: 51px;
    margin: 0;
    padding: 0;
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
    &.Mui-focused {
      outline: 2.5px solid #c7d01c;
    }
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

const StyledErrorMessageWrapper = styled.div`
  height: 0px;
  font-size: 1.4rem;
  font-weight: bold;
`;

const RegisterColorForm: FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterColorSchemaType>({
    resolver: zodResolver(registerColorSchema),
    defaultValues: {
      name: '',
      hex_color_code: '',
    },
  });
  const onSubmit: SubmitHandler<RegisterColorSchemaType> = async (formData) => {
    props.setResult('pending');
    const result: ErrorResponse | OkResponse = await useFetchRegisterColor(formData);
    props.setResult(result);
  };
  return (
    <StyledBox>
      <StyledTitle>ケーブル識別色の登録</StyledTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput id="name" type="text" {...register('name')} />
        <br />
        <StyledErrorMessageWrapper>
        <ErrorMessage errors={errors} name="name" message={errors.name?.message} />
        </StyledErrorMessageWrapper>
        <br />
        <StyledLabel htmlFor="hex_color_code">Hex Color Code</StyledLabel>
        <Controller
          name="hex_color_code"
          control={control}
          render={({ field }) => <StyledMuiColorInput {...field} format="hex" isAlphaHidden={true} />}
        />
        <br />
        <StyledErrorMessageWrapper>
        <ErrorMessage errors={errors} name="hex_color_code" message={errors.hex_color_code?.message} />
        </StyledErrorMessageWrapper>
        <br />
        <StyledSubmitWrapper>
          <StyledSubmitInput type="submit" value="ケーブル識別色の登録" />
        </StyledSubmitWrapper>
      </form>
    </StyledBox>
  );
};

export default RegisterColorForm;
