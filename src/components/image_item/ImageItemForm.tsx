import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorResponse } from '../../models/errorResponse';
import { OkResponse } from '../../models/okResponse';
import { Pending } from '../../models/pending';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { imageItemSchema, ImageItemSchemaType } from '../../validations/ImageItem';
import { useFetchImageItem } from '../../hooks/useFetchImageItem';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type Props = {
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
  id: string;
};

const ImageItemForm: FC<Props> = (props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ImageItemSchemaType>({
    resolver: zodResolver(imageItemSchema),
    defaultValues: {
      image: new DataTransfer().files,
    },
  });
  const onSubmit: SubmitHandler<ImageItemSchemaType> = async (formData) => {
    console.table(formData);
    props.setResult('pending');
    const result: ErrorResponse | OkResponse = await useFetchImageItem(parseInt(props.id), formData);
    props.setResult(result);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="imgae">Image: </label>
      <Controller
        name="image"
        control={control}
        render={({ field: { onChange, name } }) => (
          <FilePond
            name={name}
            storeAsFile={true}
            credits={false}
            labelIdle={'<span class="filepond--label-action"> ファイル選択 </span> または ドラッグ&ドロップ'}
            onupdatefiles={(files) => {
              const dataTransfer = new DataTransfer();
              files.forEach((file) => dataTransfer.items.add(file.file as File));
              onChange(dataTransfer.files);
            }}
          />
        )}
      />
      <br />
      <ErrorMessage errors={errors} name="image" message={errors.image?.message} />
      <br />
      <input type="submit" value="更新" />
    </form>
  );
};

export default ImageItemForm;
