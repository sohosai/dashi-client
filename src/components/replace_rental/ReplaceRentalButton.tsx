import { Dispatch, FC, SetStateAction } from 'react';
import { OkResponse } from '../../models/okResponse';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import { useFetchReplaceRental } from '../../hooks/useFetchReplaceRental';
import styled from 'styled-components';
import { RentalPageFlag } from '../../utils/flag';

type Props = {
  id: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<OkResponse | ErrorResponse | Pending | null>>;
  isHidden: boolean;
  rentalPageFlag: RentalPageFlag;
};

const StyledAllRentalItemsButton = styled.button`
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StyledIndividualItemButton = styled.button`
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
  return props.rentalPageFlag === 'allRentalItems' ? (
    <StyledAllRentalItemsButton onClick={handleClick} disabled={props.isHidden}>
      返却
    </StyledAllRentalItemsButton>
  ) : props.rentalPageFlag === 'individualItem' ? (
    <StyledIndividualItemButton onClick={handleClick} disabled={props.isHidden}>
      返却
    </StyledIndividualItemButton>
  ) : (
    <>Unexnpected rentalPageFlag props</>
  );
};

export default ReplaceRentalButton;
