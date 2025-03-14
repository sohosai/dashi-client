import { Dispatch, FC } from 'react';
import { Status } from '../../../model/status';
import { ErrorResponse } from '../../../model/errorResponse';
import { OkResponse } from '../../../model/okResponse';
import { Pending } from '../../../model/pending';
import { useFetchStatusConnector } from '../../../hooks/useFetchStatusConnector';

type Props = {
  id: number;
  status: Status;
  setResult: Dispatch<React.SetStateAction<ErrorResponse | OkResponse | Pending | null>>;
};

const StatusConnectorButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setResult('pending');
    const result: OkResponse | ErrorResponse = await useFetchStatusConnector(props.id, props.status);
    props.setResult(result);
  };

  return <button onClick={handleClick}>変更する</button>;
};

export default StatusConnectorButton;
