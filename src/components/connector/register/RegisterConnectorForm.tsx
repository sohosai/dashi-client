import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../../model/errorResponse';
import { OkResponse } from '../../../model/okResponse';
import { Pending } from '../../../model/pending';
import { registerConnectorSchema, RegisterConnectorSchemaType } from '../../../validation/registerConnector';
import { useFetchRegisterConnector } from '../../../hooks/useFetchRegisterConnector';
import styled from 'styled-components';

type Props = {
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

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

const StyledLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  margin: 20px 0 5px 0;
  padding: 0;
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

const RegisterConnectorForm: FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterConnectorSchemaType>({
    resolver: zodResolver(registerConnectorSchema),
  });
  const onSubmit: SubmitHandler<RegisterConnectorSchemaType> = async (formData) => {
    props.setResult('pending');
    const result: ErrorResponse | OkResponse = await useFetchRegisterConnector(formData);
    props.setResult(result);
  };
  return (
    <StyledBox>
      <StyledTitle>端子名の登録</StyledTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput id="name" type="text" {...register('name')} />
        <br />
        <ErrorMessage errors={errors} name="name" message={errors.name?.message} />
        <br />
        <StyledSubmitWrapper>
          <StyledSubmitInput type="submit" value="端子名の登録" />
        </StyledSubmitWrapper>
      </form>
    </StyledBox>
  );
};

export default RegisterConnectorForm;
