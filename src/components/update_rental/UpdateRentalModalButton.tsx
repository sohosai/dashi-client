import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { RentalPageFlag } from '../../utils/flag';

type Props = {
  isHidden: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
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
  return props.rentalPageFlag === 'allRentalItems' ? (
    <StyledAllRentalItemsButton onClick={handleClick} disabled={props.isHidden}>
      貸し出し情報の更新
    </StyledAllRentalItemsButton>
  ) : props.rentalPageFlag === 'individualItem' ? (
    <StyledIndividualItemButton onClick={handleClick} disabled={props.isHidden}>
      貸し出し情報の更新
    </StyledIndividualItemButton>
  ) : (
    <>Unexnpected rentalPageFlag props</>
  );
};

export default UpdateRentalModalButton;
