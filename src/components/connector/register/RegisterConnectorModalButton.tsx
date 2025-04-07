import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { FaCashRegister } from 'react-icons/fa';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StyledBox = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #f6f6f6;
  border: #b3b3b3 1px solid;
  cursor: pointer;
`;

const StyledLabel = styled.p`
  font-size: 1.6rem;
  margin: 10px 0 0 0;
  padding: 0;
  text-align: center;
`;

const RegisterConnectorModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return (
    <StyledBox>
      <StyledButton onClick={handleClick}>
        <FaCashRegister style={{ width: '35px', height: '35px', color: '#000000' }} />
      </StyledButton>
      <StyledLabel>端子名の登録</StyledLabel>
    </StyledBox>
  );
};

export default RegisterConnectorModalButton;
