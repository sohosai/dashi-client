import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StyledButton = styled.button`
  padding: 5px 40px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StatusColorModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return <StyledButton onClick={handleClick}>変更</StyledButton>;
};

export default StatusColorModalButton;
