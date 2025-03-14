import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  isRoot: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const TransferItemModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return (
    <>
      {props.isRoot ? (
        <button onClick={handleClick} disabled>
          Move
        </button>
      ) : (
        <button onClick={handleClick}>Move</button>
      )}
    </>
  );
};

export default TransferItemModalButton;
