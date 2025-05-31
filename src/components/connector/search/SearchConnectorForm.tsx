import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { searchConnectorSchema, SearchConnectorSchemaType } from '../../../validations/searchConnector';
import styled from 'styled-components';
import { StyledSearchForm, StyledErrorMessageWrapper } from '../../../global';

type Props = {
  keywords: string;
};

const StyledSearchInput = styled.input`
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px solid #000000;
  display: block;
  margin: 0 auto;
  font-size: 1.8rem;
  &:focus {
    outline: none;
  }
`;

const StyledSubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5px 0 0 0;
`;

const StyledSubmitInput = styled.input`
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StyledCenterErrorMessageWrapper = styled(StyledErrorMessageWrapper)`
  display: block;
  text-align: center;
`;

const SearchConnectorForm: FC<Props> = (props) => {
  const navigate = useNavigate();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchConnectorSchemaType>({
    resolver: zodResolver(searchConnectorSchema),
    defaultValues: {
      keywords: props.keywords,
    },
  });
  // update url
  const onSubmit: SubmitHandler<SearchConnectorSchemaType> = (formData) => {
    navigate(`?keywords=${formData.keywords}`);
  };
  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
      <StyledSearchInput id="keywords" type="text" {...register('keywords')} placeholder="Search" />
      <StyledCenterErrorMessageWrapper>
        <ErrorMessage errors={errors} name="keywords" message={errors.keywords?.message} />
      </StyledCenterErrorMessageWrapper>
      <br />
      <br />
      <StyledSubmitWrapper>
        <StyledSubmitInput type="submit" value="端子名検索" />
      </StyledSubmitWrapper>
    </StyledSearchForm>
  );
};

export default SearchConnectorForm;
