import { SubmitHandler, useForm, useFieldArray, Controller } from 'react-hook-form';
import { registerItemSchema, RegisterItemSchemaType } from '../../validation/registerItem';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useFetchRegisterItem } from '../../hooks/useFetchRegisterItem';
import { ErrorResponse } from '../../model/errorResponse';
import { OkResponse } from '../../model/okResponse';
import { Pending } from '../../model/pending';
import { AllSelectConnectorResponse } from '../../model/allConnectorsResponse';
import { AllSelectColorResponse } from '../../model/allColorsResponse';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { Loading, ErrorResult } from '..';
import { useSelectConnector } from '../../hooks/useSelectConnector';
import { useSelectColor } from '../../hooks/useSelectColor';
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import { SelectColorResponse } from '../../model/colorResponse';
import { SelectConnectorResponse } from '../../model/connectorResponse';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type Props = {
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

const styleConnectorSelect: StylesConfig<SelectConnectorResponse> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    height: 50,
  }),
  option: (styles) => ({ ...styles }),
  input: (styles) => ({
    ...styles,
  }),
  placeholder: (styles) => ({
    ...styles,
  }),
  singleValue: (styles) => ({
    ...styles,
  }),
};

const styleColorSelectDot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const styleColorSelect: StylesConfig<SelectColorResponse> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    height: 50,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.hex_color_code);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? color.css()
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.hex_color_code,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled ? (isSelected ? color.css() : color.alpha(0.3).css()) : undefined,
      },
    };
  },
  input: (styles) => ({
    ...styles,
    ...styleColorSelectDot(),
  }),
  placeholder: (styles) => ({
    ...styles,
    ...styleColorSelectDot('#cccccc'),
  }),
  singleValue: (styles, { data }) => {
    const color = chroma(data.hex_color_code);
    return {
      ...styles,
      ...styleColorSelectDot(color.css()),
    };
  },
};

const RegisterItemForm: FC<Props> = (props) => {
  const connectors: ErrorResponse | Pending | AllSelectConnectorResponse = useSelectConnector();
  const colors: ErrorResponse | Pending | AllSelectColorResponse = useSelectColor();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterItemSchemaType>({
    resolver: zodResolver(registerItemSchema),
    defaultValues: {
      image: new DataTransfer().files,
    },
  });
  const onSubmit: SubmitHandler<RegisterItemSchemaType> = async (formData) => {
    console.table(formData);
    props.setResult('pending');
    const result: ErrorResponse | OkResponse = await useFetchRegisterItem(formData);
    props.setResult(result);
  };
  const connectorArray = useFieldArray({
    name: 'connector',
    control,
  });
  const colorArray = useFieldArray({
    name: 'color',
    control,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" {...register('name')} />
      <br />
      <ErrorMessage errors={errors} name="name" message={errors.name?.message} />
      <br />
      <label htmlFor="visible_id">Visible ID: </label>
      <input id="visible_id" type="text" {...register('visible_id')} />
      <br />
      <ErrorMessage errors={errors} name="visible_id" message={errors.visible_id?.message} />
      <br />
      <label htmlFor="parent_visible_id">Parent Visible ID: </label>
      <input id="parent_visible_id" type="text" {...register('parent_visible_id')} />
      <br />
      <ErrorMessage errors={errors} name="parent_visible_id" message={errors.parent_visible_id?.message} />
      <br />
      <label htmlFor="product_number">Product Number: </label>
      <input id="product_number" type="text" {...register('product_number')} />
      <br />
      <ErrorMessage errors={errors} name="product_number" message={errors.product_number?.message} />
      <br />
      <label htmlFor="description">Description: </label>
      <input id="description" type="text" {...register('description')} />
      <br />
      <ErrorMessage errors={errors} name="description" message={errors.description?.message} />
      <br />
      <label htmlFor="purchase_year">Purchase Year: </label>
      <input id="purchase_year" type="number" {...register('purchase_year', { valueAsNumber: true })} />
      <br />
      <ErrorMessage errors={errors} name="purchase_year" message={errors.purchase_year?.message} />
      <br />
      <label htmlFor="purchase_price">Purchase Price: </label>
      <input id="purchase_price" type="number" {...register('purchase_price', { valueAsNumber: true })} />
      <br />
      <ErrorMessage errors={errors} name="purchase_price" message={errors.purchase_price?.message} />
      <br />
      <label htmlFor="durability">Durability: </label>
      <input id="durability" type="number" {...register('durability', { valueAsNumber: true })} />
      <br />
      <ErrorMessage errors={errors} name="durability" message={errors.durability?.message} />
      <br />
      <label htmlFor="is_depreciation">Is Depreciation: </label>
      <input id="is_depreciation" type="checkbox" {...register('is_depreciation')} />
      <br />
      <ErrorMessage errors={errors} name="is_depreciation" message={errors.is_depreciation?.message} />
      <br />
      <label htmlFor="connector">Connector: </label>
      {connectors === 'pending' ? (
        <Loading />
      ) : 'code' in connectors && 'message' in connectors ? (
        <ErrorResult result={connectors} />
      ) : (
        // connector field
        <>
          {connectorArray.fields.map((field, index: number) => (
            <div key={field.id}>
              <label htmlFor="connector">{index}</label>
              <Controller
                name={`connector.${index}.connector`}
                control={control}
                render={({ field }) => (
                  <Select
                    styles={styleConnectorSelect}
                    options={connectors.all_connectors}
                    isSearchable={true}
                    noOptionsMessage={() => '存在しない端子名です。'}
                    isOptionDisabled={(option) => option.status === 'Archive'}
                    value={connectors.all_connectors.find((element) => element.label === field.value)}
                    getOptionLabel={(option) =>
                      option.label + (option.status === 'Archive' ? ' (非推奨の端子名です)' : '')
                    }
                    onChange={(newValue) => field.onChange((newValue as SelectColorResponse)?.value)}
                  />
                )}
              />
              {index >= 0 && <input type="submit" value="✕" onClick={() => connectorArray.remove(index)} />}
            </div>
          ))}
          <br />
          <ErrorMessage errors={errors} name="connector" message={errors.connector?.message} />
          <br />
          <input
            type="button"
            value="端子の追加"
            onClick={() => connectorArray.append({ connector: connectors.all_connectors[0].label })}
          />
        </>
      )}
      <br />
      {colors === 'pending' ? (
        <Loading />
      ) : 'code' in colors && 'message' in colors ? (
        <ErrorResult result={colors} />
      ) : (
        // color field
        <>
          <label htmlFor="color">Color: </label>
          {colorArray.fields.map((field, index: number) => (
            <div key={field.id}>
              <label htmlFor="color">{index}</label>
              <Controller
                name={`color.${index}.color`}
                control={control}
                render={({ field }) => (
                  <Select
                    styles={styleColorSelect}
                    options={colors.all_colors}
                    isSearchable={true}
                    noOptionsMessage={() => '存在しない色です。'}
                    isOptionDisabled={(option) => option.status === 'Archive'}
                    value={colors.all_colors.find((element) => element.label === field.value)}
                    getOptionLabel={(option) => option.label + (option.status === 'Archive' ? ' (非推奨の色です)' : '')}
                    onChange={(newValue) => field.onChange((newValue as SelectColorResponse)?.value)}
                  />
                )}
              />
              {index >= 0 && <input type="submit" value="✕" onClick={() => colorArray.remove(index)} />}
            </div>
          ))}
          <br />
          <ErrorMessage errors={errors} name="color" message={errors.color?.message} />
          <br />
          <input
            type="button"
            value="色の追加"
            onClick={() => colorArray.append({ color: colors.all_colors[0].label })}
          />
        </>
      )}
      <br />
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
      <input type="submit" value="登録" />
    </form>
  );
};

export default RegisterItemForm;
