import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StyledButton = styled.button`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #f6f6f6;
  border: #b3b3b3 1px solid;
  cursor: pointer;
`;

const MenuModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return <StyledButton onClick={handleClick}>Menu</StyledButton>;
};

export default MenuModalButton;
