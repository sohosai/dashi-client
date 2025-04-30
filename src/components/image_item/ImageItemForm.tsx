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
import { imageItemSchema, ImageItemSchemaType } from '../../validations/imageItem';
import { useFetchImageItem } from '../../hooks/useFetchImageItem';
import styled from 'styled-components';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type Props = {
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
  id: string;
};

const StyledLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  margin: 0 0 5px 0;
  padding: 0;
`;

const StyledFilePond = styled(FilePond)`
  & .filepond--drop-label {
    font-size: 1.6rem;
    height: 260px;
    border: 1px solid #b3b3b3;
  }
`;

const StyledSubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
`;

const StyledSubmitInput = styled.input`
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const StyledErrorMessageWrapper = styled.div`
  height: 0px;
  font-size: 1.4rem;
  font-weight: bold;
`;

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
      <StyledLabel htmlFor="imgae">物品の画像</StyledLabel>
      <Controller
        name="image"
        control={control}
        render={({ field: { onChange, name } }) => (
          <StyledFilePond
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
      <StyledErrorMessageWrapper>
      <ErrorMessage errors={errors} name="image" message={errors.image?.message} />
      </StyledErrorMessageWrapper>
      <br />
      <br />
      <StyledSubmitWrapper>
      <StyledSubmitInput type="submit" value="更新" />
      </StyledSubmitWrapper>
    </form>
  );
};

export default ImageItemForm;
