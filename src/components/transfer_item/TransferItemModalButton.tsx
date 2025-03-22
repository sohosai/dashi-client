import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  isHidden: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const TransferItemModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return (
    <>
      {props.isHidden ? (
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
