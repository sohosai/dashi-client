import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { generateSchema, GenerateSchemaType } from '../../validations/generate';
import { useFetchGenerate } from '../../hooks/useFetchGenerate';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import { GenerateResponse } from '../../models/generateResponse';
import { Record } from '../../models/record';
import styled from 'styled-components';
import Select, { StylesConfig } from 'react-select';
import { StyledInput } from '../../global';
import { StyledForm } from '../../global';
import { StyledErrorMessageWrapper } from '../../global';

type Props = {
  setResult: Dispatch<SetStateAction<GenerateResponse | ErrorResponse | Pending | null>>;
  setRecordType: Dispatch<SetStateAction<Record | null>>;
};

// react-select
type RecordOption = {
  label: string;
  value: Record;
};

const recordOptions: readonly RecordOption[] = [
  { label: 'QR', value: 'Qr' },
  { label: 'バーコード', value: 'Barcode' },
  { label: 'なし', value: 'Nothing' },
];

// Class for react-select
const styleSelect: StylesConfig<RecordOption> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    height: 51,
    fontSize: '1.6rem',
    border: '1.5px solid #6f6f6f',
    margin: '0',
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

// styled-components
/* const StyledBox = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
StyledBoxの履歴
*/

const StyledLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  margin: 20px 0 5px 0;
  padding: 0;
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
    control,
  } = useForm<GenerateSchemaType>({
    resolver: zodResolver(generateSchema),
    defaultValues: {
      quantity: 49,
      record: recordOptions[0].value,
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel htmlFor="quantity">Quantity</StyledLabel>
      <StyledInput id="quantity" type="number" {...register('quantity')} />
      <StyledErrorMessageWrapper>
        <ErrorMessage errors={errors} name="quantity" message={errors.quantity?.message} />
      </StyledErrorMessageWrapper>
      <br />
      <br />
      <StyledLabel htmlFor="record">Record</StyledLabel>
      <Controller
        name={'record'}
        control={control}
        render={({ field }) => (
          <Select
            styles={styleSelect}
            options={recordOptions}
            isSearchable={true}
            noOptionsMessage={() => '存在しないラベルの種類です。'}
            value={recordOptions.find((element) => element.value === field.value)}
            onChange={(newValue) => field.onChange((newValue as RecordOption)?.value)}
          />
        )}
      />
      {/* <StyledSelect id="record" {...register('record')}>
        <option value="Qr">QR</option>
        <option value="Barcode">バーコード</option>
        <option value="Nothing">なし</option>
      </StyledSelect> */}
      <br />
      <ErrorMessage errors={errors} name="record" message={errors.record?.message} />
      <br />
      <StyledSubmitWrapper>
        <StyledSubmitInput type="submit" value="生成" />
      </StyledSubmitWrapper>
    </StyledForm>
  );
};

export default GenerateForm;
