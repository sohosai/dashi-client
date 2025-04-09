import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import DashiIcon from '/dashi.svg';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StyledButton = styled.button`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`;

const MenuModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return (
    <StyledButton onClick={handleClick}>
      <img src={DashiIcon} alt="menu" width={70} height={70} />
    </StyledButton>
  );
};

export default MenuModalButton;
