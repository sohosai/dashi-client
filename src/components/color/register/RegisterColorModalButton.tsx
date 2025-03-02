import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const RegisterColorModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return <button onClick={handleClick}>Register</button>;
};

export default RegisterColorModalButton;
