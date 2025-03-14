import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../../model/errorResponse';
import { OkResponse } from '../../../model/okResponse';
import { Pending } from '../../../model/pending';
import { registerColorSchema, RegisterColorSchemaType } from '../../../validation/registerColor';
import { useFetchRegisterColor } from '../../../hooks/useFetchRegisterColor';
import { MuiColorInput } from 'mui-color-input';

type Props = {
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" {...register('name')} />
      <br />
      <ErrorMessage errors={errors} name="name" message={errors.name?.message} />
      <br />
      <label htmlFor="hex_color_code">Hex color code: </label>
      <Controller
        name="hex_color_code"
        control={control}
        render={({ field }) => <MuiColorInput {...field} style={{}} format="hex" isAlphaHidden={true} />}
      />
      <br />
      <ErrorMessage errors={errors} name="hex_color_code" message={errors.hex_color_code?.message} />
      <br />
      <input type="submit" value="登録" />
    </form>
  );
};

export default RegisterColorForm;
