import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../../model/errorResponse';
import { OkResponse } from '../../../model/okResponse';
import { Pending } from '../../../model/pending';
import { registerConnectorSchema, RegisterConnectorSchemaType } from '../../../validation/registerConnector';
import { useFetchRegisterConnector } from '../../../hooks/useFetchRegisterConnector';

type Props = {
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" {...register('name')} />
      <br />
      <ErrorMessage errors={errors} name="name" message={errors.name?.message} />
      <br />
      <input type="submit" value="登録" />
    </form>
  );
};

export default RegisterConnectorForm;
