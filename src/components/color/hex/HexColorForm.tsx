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

type Props = {
  id: number;
  hex_color_code: string;
  status: Status;
  setResult: Dispatch<React.SetStateAction<ErrorResponse | OkResponse | Pending | null>>;
};

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="hex_color_code">Hex color code: </label>
      <Controller
        name="hex_color_code"
        control={control}
        render={({ field }) => <MuiColorInput {...field} style={{}} format="hex" isAlphaHidden={true} />}
      />
      <br />
      <ErrorMessage errors={errors} name="hex_color_code" message={errors.hex_color_code?.message} />
      <br />
      <input type="submit" value="更新" />
    </form>
  );
};

export default StatusColorForm;
