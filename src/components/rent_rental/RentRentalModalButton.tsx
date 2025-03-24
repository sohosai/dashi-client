import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  isHidden: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const RentRentalModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return (
    <>
      {props.isHidden ? (
        <button onClick={handleClick} disabled>
          Rent
        </button>
      ) : (
        <button onClick={handleClick}>Rent</button>
      )}
    </>
  );
};

export default RentRentalModalButton;
