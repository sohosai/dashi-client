import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isHidden: boolean;
};

const ImageItemModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return props.isHidden ? (
    <button onClick={handleClick} disabled>
      画像の更新
    </button>
  ) : (
    <button onClick={handleClick}>画像の更新</button>
  );
};

export default ImageItemModalButton;
