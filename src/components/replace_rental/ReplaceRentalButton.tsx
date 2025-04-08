import { Dispatch, FC, SetStateAction } from 'react';
import { OkResponse } from '../../model/okResponse';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import { useFetchReplaceRental } from '../../hooks/useFetchReplaceRental';
import styled from 'styled-components';

type Props = {
  id: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
  isHidden: boolean;
};

const StyledButton = styled.button`
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const ReplaceRentalButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setIsOpen(true);
    props.setResult('pending');
    const result: OkResponse | ErrorResponse = await useFetchReplaceRental(parseInt(props.id));
    props.setResult(result);
  };
  return props.isHidden ? (
    <StyledButton onClick={handleClick} disabled>
      返却
    </StyledButton>
  ) : (
    <StyledButton onClick={handleClick}>返却</StyledButton>
  );
};

export default ReplaceRentalButton;
