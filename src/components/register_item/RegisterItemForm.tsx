import { SubmitHandler, useForm, useFieldArray, Controller } from 'react-hook-form';
import { registerItemSchema, RegisterItemSchemaType } from '../../validations/registerItem';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useFetchRegisterItem } from '../../hooks/useFetchRegisterItem';
import { ErrorResponse } from '../../models/errorResponse';
import { OkResponse } from '../../models/okResponse';
import { Pending } from '../../models/pending';
import { AllSelectConnectorResponse } from '../../models/allConnectorsResponse';
import { AllSelectColorResponse } from '../../models/allColorsResponse';
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
import { SelectColorResponse } from '../../models/colorResponse';
import { SelectConnectorResponse } from '../../models/connectorResponse';
import styled from 'styled-components';
import ConnectorIcon from '/connector.svg';
import CableIcon from '/cable.svg';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type Props = {
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

// react-select
// connector select
const styleConnectorSelect: StylesConfig<SelectConnectorResponse> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    height: 51,
    fontSize: '1.6rem',
    border: '1.5px solid #6f6f6f',
    margin: '20px 0 0 0',
    '&:hover': {
      border: '1.5px solid #6f6f6f',
    },
    ...(isFocused && {
      outline: '2.5px solid #c7d01c',
    }),
  }),
  option: (styles) => ({ ...styles, fontSize: '1.6rem' }),
  input: (styles) => ({
    ...styles,
    fontSize: '1.6rem',
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '1.6rem',
  }),
  singleValue: (styles) => ({
    ...styles,
    fontSize: '1.6rem',
  }),
  noOptionsMessage: (styles) => ({
    ...styles,
    fontSize: '1.6rem',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: '#6f6f6f',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#6f6f6f',
  }),
};

// color select
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
    border: '0.5px solid #6f6f6f',
  },
});

const styleColorSelect: StylesConfig<SelectColorResponse> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    height: 51,
    fontSize: '1.6rem',
    border: '1.5px solid #6f6f6f',
    margin: '20px 0 0 0',
    '&:hover': {
      border: '1.5px solid #6f6f6f',
    },
    ...(isFocused && {
      outline: '2.5px solid #c7d01c',
    }),
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.hex_color_code);
    return {
      ...styles,
      fontSize: '1.6rem',
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? color.css()
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#b3b3b3'
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
    fontSize: '1.6rem',
    ...styleColorSelectDot(),
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '1.6rem',
    ...styleColorSelectDot('#b3b3b3'),
  }),
  singleValue: (styles, { data }) => {
    const color = chroma(data.hex_color_code);
    return {
      ...styles,
      fontSize: '1.6rem',
      ...styleColorSelectDot(color.css()),
    };
  },
  noOptionsMessage: (styles) => ({
    ...styles,
    fontSize: '1.6rem',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: '#6f6f6f',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#6f6f6f',
  }),
};

// styled-components
const StyledBox = styled.div`
  margin: 60px auto 100px auto;
  padding: 0;
  width: 90%;
  max-width: 600px;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 569px;
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

const StyledFilePond = styled(FilePond)`
  & .filepond--drop-label {
    font-size: 1.6rem;
    height: 276px;
    border: 1px solid #b3b3b3;
  }
`;

const StyledAddWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0 10px 0;
`;

const StyledAddInput = styled.input`
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  width: 200px;
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
  font-size: 2rem;
  cursor: pointer;
`;

const StyledToggleLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 25px 0 0 0;
  padding: 0;
`;

const StyledDeleteInput = styled.input`
  width: 40px;
  height: 40px;
  font-size: 20px;
  color: #6f6f6f;
  background-color: #f6f6f6;
  border: 1px solid #6f6f6f;
  display: block;
  margin: 10px auto 0 auto;
  cursor: pointer;
`;

const StyledToggleLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 35px;
  border-radius: 50px;
  background-color: #f6f6f6;
  border: 1px solid #b3b3b3;
  cursor: pointer;
  transition: background-color 0.4s;
  &:has(:checked) {
    background-color: #c7d01c;
  }
  &::after {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
    background-color: #ffffff;
    content: '';
    transition: left 0.4s;
  }
  &:has(:checked)::after {
    left: 46.5px;
  }
`;

const StyledToggleInput = styled.input`
  display: none;
`;

const StyledIconBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StyledIconWrapper = styled.div`
  width: fit-content;
`;

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
    <StyledBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">物品名</StyledLabel>
        <StyledInput id="name" type="text" {...register('name')} />
        <br />
        <ErrorMessage errors={errors} name="name" message={errors.name?.message} />
        <br />
        <StyledLabel htmlFor="visible_id">ラベルID</StyledLabel>
        <StyledInput id="visible_id" type="text" {...register('visible_id')} />
        <br />
        <ErrorMessage errors={errors} name="visible_id" message={errors.visible_id?.message} />
        <br />
        <StyledLabel htmlFor="parent_visible_id">親物品のラベルID</StyledLabel>
        <StyledInput id="parent_visible_id" type="text" {...register('parent_visible_id')} />
        <br />
        <ErrorMessage errors={errors} name="parent_visible_id" message={errors.parent_visible_id?.message} />
        <br />
        <StyledLabel htmlFor="product_number">型番</StyledLabel>
        <StyledInput id="product_number" type="text" {...register('product_number')} />
        <br />
        <ErrorMessage errors={errors} name="product_number" message={errors.product_number?.message} />
        <br />
        <StyledLabel htmlFor="description">備考</StyledLabel>
        <StyledInput id="description" type="text" {...register('description')} />
        <br />
        <ErrorMessage errors={errors} name="description" message={errors.description?.message} />
        <br />
        <StyledLabel htmlFor="purchase_year">購入年度</StyledLabel>
        <StyledInput id="purchase_year" type="number" {...register('purchase_year', { valueAsNumber: true })} />
        <br />
        <ErrorMessage errors={errors} name="purchase_year" message={errors.purchase_year?.message} />
        <br />
        <StyledLabel htmlFor="purchase_price">購入金額</StyledLabel>
        <StyledInput id="purchase_price" type="number" {...register('purchase_price', { valueAsNumber: true })} />
        <br />
        <ErrorMessage errors={errors} name="purchase_price" message={errors.purchase_price?.message} />
        <br />
        <StyledLabel htmlFor="durability">耐久年数</StyledLabel>
        <StyledInput id="durability" type="number" {...register('durability', { valueAsNumber: true })} />
        <br />
        <ErrorMessage errors={errors} name="durability" message={errors.durability?.message} />
        <br />
        <StyledLabel htmlFor="is_depreciation">減価償却対象かどうか</StyledLabel>
        <StyledToggleLabelWrapper>
          <StyledToggleLabel>
            <StyledToggleInput id="is_depreciation" type="checkbox" {...register('is_depreciation')} />
          </StyledToggleLabel>
        </StyledToggleLabelWrapper>
        <br />
        <ErrorMessage errors={errors} name="is_depreciation" message={errors.is_depreciation?.message} />
        <br />
        <StyledLabel htmlFor="connector">接続名</StyledLabel>
        {connectors === 'pending' ? (
          <Loading />
        ) : 'code' in connectors && 'message' in connectors ? (
          <ErrorResult result={connectors} />
        ) : (
          // connector field
          <>
            {connectorArray.fields.map((field, index: number) => (
              <div key={field.id}>
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
                {index >= 0 && (
                  <StyledDeleteInput type="submit" value="✕" onClick={() => connectorArray.remove(index)} />
                )}
              </div>
            ))}
            <br />
            <ErrorMessage errors={errors} name="connector" message={errors.connector?.message} />
            <br />
            <StyledAddWrapper>
              <StyledAddInput
                type="button"
                value="端子名の追加"
                onClick={() => connectorArray.append({ connector: connectors.all_connectors[0].label })}
              />
            </StyledAddWrapper>
          </>
        )}
        {colors === 'pending' ? (
          <Loading />
        ) : 'code' in colors && 'message' in colors ? (
          <ErrorResult result={colors} />
        ) : (
          // color field
          <>
            <StyledLabel htmlFor="color">ケーブル識別色のパターン</StyledLabel>
            <StyledIconBox>
              <StyledIconWrapper>
                <img src={ConnectorIcon} alt="menu" width={70} height={215.767} />
              </StyledIconWrapper>
            </StyledIconBox>
            {colorArray.fields.map((field, index: number) => (
              <div key={field.id}>
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
                      getOptionLabel={(option) =>
                        option.label + (option.status === 'Archive' ? ' (非推奨の色です)' : '')
                      }
                      onChange={(newValue) => field.onChange((newValue as SelectColorResponse)?.value)}
                    />
                  )}
                />
                {index >= 0 && <StyledDeleteInput type="submit" value="✕" onClick={() => colorArray.remove(index)} />}
              </div>
            ))}
            <br />
            <ErrorMessage errors={errors} name="color" message={errors.color?.message} />
            <br />
            <StyledIconBox>
              <StyledIconWrapper>
                <img src={CableIcon} alt="menu" width={32} height={81.6334} />
              </StyledIconWrapper>
            </StyledIconBox>
            <StyledAddWrapper>
              <StyledAddInput
                type="button"
                value="ケーブル識別色の追加"
                onClick={() => colorArray.append({ color: colors.all_colors[0].label })}
              />
            </StyledAddWrapper>
          </>
        )}
        <br />
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
        <br />
        <ErrorMessage errors={errors} name="image" message={errors.image?.message} />
        <br />
        <StyledSubmitWrapper>
          <StyledSubmitInput type="submit" value="物品情報の登録" />
        </StyledSubmitWrapper>
      </form>
    </StyledBox>
  );
};

export default RegisterItemForm;
