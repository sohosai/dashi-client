import { Dispatch, FC, SetStateAction } from 'react';
import { OkResponse } from '../../models/okResponse';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import { useFetchTransferItem } from '../../hooks/useFetchTransferItem';

type Props = {
  id: string;
  parent_id: number;
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

const TransferItemButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setResult('pending');
    const result: OkResponse | ErrorResponse = await useFetchTransferItem(parseInt(props.id), props.parent_id);
    props.setResult(result);
  };
  return <button onClick={handleClick}>Move</button>;
};

export default TransferItemButton;
