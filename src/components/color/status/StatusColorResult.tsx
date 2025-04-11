import { FC } from 'react';
import { OkResponse } from '../../../models/okResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import { ErrorResult, OkResult } from '../..';

type Props = {
  result: OkResponse | ErrorResponse;
};

const StatusColorResult: FC<Props> = (props) => {
  return props.result == 'ok' ? <OkResult result={props.result} /> : <ErrorResult result={props.result} />;
};

export default StatusColorResult;
