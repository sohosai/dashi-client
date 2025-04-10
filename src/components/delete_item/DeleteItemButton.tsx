import { Dispatch, FC, SetStateAction } from 'react';
import { OkResponse } from '../../models/okResponse';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import { useFetchDeleteItem } from '../../hooks/useFetchDeleteItem';

type Props = {
  id: string;
  isHidden: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
};

const DeleteItemButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
    props.setResult('pending');
    const result: OkResponse | ErrorResponse = await useFetchDeleteItem(parseInt(props.id));
    props.setResult(result);
  };
  return (
    <>
      {props.isHidden ? (
        <button onClick={handleClick} disabled>
          Delete
        </button>
      ) : (
        <button onClick={handleClick}>Delete</button>
      )}
    </>
  );
};

export default DeleteItemButton;
