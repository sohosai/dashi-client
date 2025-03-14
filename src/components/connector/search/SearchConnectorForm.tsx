import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { searchConnectorSchema, SearchConnectorSchemaType } from '../../../validation/searchConnector';

type Props = {
  keywords: string;
};

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="keywords">Search: </label>
      <input id="keywords" type="text" {...register('keywords')} placeholder="Search" />
      <br />
      <ErrorMessage errors={errors} name="keywords" message={errors.keywords?.message} />
      <br />
      <input type="submit" value="検索" />
    </form>
  );
};

export default SearchConnectorForm;
