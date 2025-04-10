import { FC } from 'react';
import { OkResponse } from '../../../models/okResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import ErrorResult from '../../error/ErrorResult';
import OkResult from '../../ok/OkResult';

type Props = {
  result: OkResponse | ErrorResponse;
};

const RegisterColorResult: FC<Props> = (props) => {
  return <>{props.result == 'ok' ? <OkResult result={props.result} /> : <ErrorResult result={props.result} />}</>;
};

export default RegisterColorResult;
