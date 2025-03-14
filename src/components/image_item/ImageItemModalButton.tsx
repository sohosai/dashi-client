import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ImageItemModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return <button onClick={handleClick}>画像の更新</button>;
};

export default ImageItemModalButton;
