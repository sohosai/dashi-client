import { Dispatch, FC } from 'react';
import { Status } from '../../../model/status';
import { ErrorResponse } from '../../../model/errorResponse';
import { OkResponse } from '../../../model/okResponse';
import { Pending } from '../../../model/pending';
import { useFetchUpdateColor } from '../../../hooks/useFetchUpdateColor';

type Props = {
  id: number;
  hex_color_code: string;
  status: Status;
  setResult: Dispatch<React.SetStateAction<ErrorResponse | OkResponse | Pending | null>>;
};

const StatusColorButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setResult('pending');
    const result: OkResponse | ErrorResponse = await useFetchUpdateColor(props.id, props.hex_color_code, props.status);
    props.setResult(result);
  };

  return <button onClick={handleClick}>変更する</button>;
};

export default StatusColorButton;
