import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  isHidden: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const UpdateRentalModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return (
    <>
      {props.isHidden ? (
        <button onClick={handleClick} disabled>
          Update
        </button>
      ) : (
        <button onClick={handleClick}>Update</button>
      )}
    </>
  );
};

export default UpdateRentalModalButton;
