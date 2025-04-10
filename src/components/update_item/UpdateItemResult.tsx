import { FC } from 'react';
import { OkResponse } from '../../models/okResponse';
import { ErrorResponse } from '../../models/errorResponse';
import ErrorResult from '../error/ErrorResult';
import OkResult from '../ok/OkResult';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  result: OkResponse | ErrorResponse;
};

const UpdateItemResult: FC<Props> = (props) => {
  return (
    <>
      {props.result == 'ok' ? (
        <>
          <OkResult result={props.result} />
          <Link to={`/item/${props.id}`}>戻る</Link>
        </>
      ) : (
        <>
          <ErrorResult result={props.result} />
          <Link to={`/item/${props.id}`}>戻る</Link>
        </>
      )}
    </>
  );
};

export default UpdateItemResult;
