import { Dispatch, FC, SetStateAction } from 'react';
import { OkResponse } from '../../model/okResponse';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import { useFetchReplaceRental } from '../../hooks/useFetchReplaceRental';

type Props = {
  id: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
  isHidden: boolean;
};

const ReplaceRentalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
    props.setResult('pending');
    const result: OkResponse | ErrorResponse = await useFetchReplaceRental(parseInt(props.id));
    props.setResult(result);
  };
  return props.isHidden ? (
    <button onClick={handleClick} disabled>
      Replace
    </button>
  ) : (
    <button onClick={handleClick}>Replace</button>
  );
};

export default ReplaceRentalButton;
