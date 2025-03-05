import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StatusColorModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return <button onClick={handleClick}>Hex Color Code</button>;
};

export default StatusColorModalButton;
