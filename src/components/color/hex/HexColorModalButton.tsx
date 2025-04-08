import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { Status } from '../../../model/status';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  status: Status;
};

const StyledActiveButton = styled.button`
  padding: 5px 40px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StyledArchiveButton = styled.button`
  padding: 5px 40px;
  background-color: rgba(202, 173, 99, 0.3);
  border: none;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.3);
`;

const StatusColorModalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
  };
  return (
    <>
      {props.status === 'Active' ? (
        <StyledActiveButton onClick={handleClick}>色の変更</StyledActiveButton>
      ) : (
        <StyledArchiveButton onClick={handleClick} disabled>
          色の変更
        </StyledArchiveButton>
      )}
    </>
  );
};

export default StatusColorModalButton;
