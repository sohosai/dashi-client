import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../../models/errorResponse';
import { OkResponse } from '../../../models/okResponse';
import { Pending } from '../../../models/pending';
import { registerConnectorSchema, RegisterConnectorSchemaType } from '../../../validations/registerConnector';
import { useFetchRegisterConnector } from '../../../hooks/useFetchRegisterConnector';
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
  font-size: 1.3rem;
  font-weight: bold;
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
        <StyledErrorMessageWrapper>
        <ErrorMessage errors={errors} name="name" message={errors.name?.message} />
        </StyledErrorMessageWrapper>
        <br />
        <StyledSubmitWrapper>
          <StyledSubmitInput type="submit" value="端子名の登録" />
        </StyledSubmitWrapper>
      </form>
    </StyledBox>
  );
};

export default RegisterConnectorForm;
