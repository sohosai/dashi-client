import { FC } from 'react';
import { OkResponse } from '../../model/okResponse';
import { ErrorResponse } from '../../model/errorResponse';
import ErrorResult from '../error/ErrorResult';
import OkResult from '../ok/OkResult';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  result: OkResponse | ErrorResponse;
};

const UpdateRentalResult: FC<Props> = (props) => {
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

export default UpdateRentalResult;
