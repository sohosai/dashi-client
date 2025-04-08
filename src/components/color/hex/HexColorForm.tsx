import { Dispatch, FC } from 'react';
import { Status } from '../../../model/status';
import { ErrorResponse } from '../../../model/errorResponse';
import { OkResponse } from '../../../model/okResponse';
import { Pending } from '../../../model/pending';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { hexColorSchema, HexColorSchemaType } from '../../../validation/hexColor';
import { useFetchUpdateColor } from '../../../hooks/useFetchUpdateColor';
import { MuiColorInput } from 'mui-color-input';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';

type Props = {
  id: number;
  hex_color_code: string;
  status: Status;
  setResult: Dispatch<React.SetStateAction<ErrorResponse | OkResponse | Pending | null>>;
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

const StatusColorForm: FC<Props> = (props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<HexColorSchemaType>({
    resolver: zodResolver(hexColorSchema),
    defaultValues: {
      hex_color_code: props.hex_color_code,
    },
  });
  const onSubmit: SubmitHandler<HexColorSchemaType> = async (formData) => {
    props.setResult('pending');
    console.log('props.id:', props.id);
    console.log('formData.hex_color_code:', formData.hex_color_code);
    console.log('props.status:', props.status);
    const result: OkResponse | ErrorResponse = await useFetchUpdateColor(
      props.id,
      formData.hex_color_code,
      props.status
    );
    props.setResult(result);
  };

  return (
    <StyledBox>
      <StyledTitle>色の変更</StyledTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="hex_color_code">Hex Color Code</StyledLabel>
        <Controller
          name="hex_color_code"
          control={control}
          render={({ field }) => <StyledMuiColorInput {...field} style={{}} format="hex" isAlphaHidden={true} />}
        />
        <br />
        <ErrorMessage errors={errors} name="hex_color_code" message={errors.hex_color_code?.message} />
        <br />
        <StyledSubmitWrapper>
          <StyledSubmitInput type="submit" value="色の変更" />
        </StyledSubmitWrapper>
      </form>
    </StyledBox>
  );
};

export default StatusColorForm;
