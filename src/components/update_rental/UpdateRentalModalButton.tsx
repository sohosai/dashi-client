import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

type Props = {
  isHidden: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StyledButton = styled.button`
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const UpdateRentalModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return (
    <>
      {props.isHidden ? (
        <StyledButton onClick={handleClick} disabled>
          貸し出し情報の更新
        </StyledButton>
      ) : (
        <StyledButton onClick={handleClick}>貸し出し情報の更新</StyledButton>
      )}
    </>
  );
};

export default UpdateRentalModalButton;
