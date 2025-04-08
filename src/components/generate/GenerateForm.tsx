import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { generateSchema, GenerateSchemaType } from '../../validation/generate';
import { useFetchGenerate } from '../../hooks/useFetchGenerate';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import { GenerateResponse } from '../../model/generateResponse';
import { Record } from '../../model/generateRequest';
import styled from 'styled-components';

type Props = {
  setResult: Dispatch<SetStateAction<GenerateResponse | ErrorResponse | Pending | null>>;
  setRecordType: Dispatch<SetStateAction<Record | null>>;
};

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

const StyledInput = styled.input`
  width: 100%;
  max-width: 369px;
  font-size: 1.6rem;
  height: 48px;
  margin: 0;
  padding: 0 14px;
  border: 1.5px solid #6f6f6f;
  border-radius: 0;
  &:focus {
    outline: 2.5px solid #c7d01c;
  }
`;

const StyledSelect = styled.select`
  width: 400px;
  font-size: 1.6rem;
  height: 48px;
  margin: 0;
  padding: 0 14px;
  border: 1.5px solid #6f6f6f;
  border-radius: 0;
  background-color: #ffffff;
  cursor: pointer;
  &:focus {
    outline: 2.5px solid #c7d01c;
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

const GenerateForm: FC<Props> = (props) => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenerateSchemaType>({
    resolver: zodResolver(generateSchema),
    defaultValues: {
      quantity: 49,
      record: 'Qr',
    },
  });
  // update url
  const onSubmit: SubmitHandler<GenerateSchemaType> = async (formData) => {
    props.setResult('pending');
    const result: GenerateResponse | ErrorResponse = await useFetchGenerate(formData.quantity, formData.record);
    props.setRecordType(formData.record);
    props.setResult(result);
  };
  return (
    <StyledBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="quantity">Quantity</StyledLabel>
        <StyledInput id="quantity" type="number" {...register('quantity')} />
        <br />
        <ErrorMessage errors={errors} name="quantity" message={errors.quantity?.message} />
        <br />
        <StyledLabel htmlFor="record">Record</StyledLabel>
        <StyledSelect id="record" {...register('record')}>
          <option value="Qr">QR</option>
          <option value="Barcode">バーコード</option>
          <option value="Nothing">なし</option>
        </StyledSelect>
        <br />
        <ErrorMessage errors={errors} name="record" message={errors.record?.message} />
        <br />
        <StyledSubmitWrapper>
          <StyledSubmitInput type="submit" value="生成" />
        </StyledSubmitWrapper>
      </form>
    </StyledBox>
  );
};

export default GenerateForm;
