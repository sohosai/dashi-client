import { FC } from 'react';
import { AllRentalItemsResponse, RentalItemResponse } from '../../models/allRentalItemsResponse';
import styled from 'styled-components';
import AllRentalItemsLi from './AllRentalItemsLi';

type Props = {
  item: AllRentalItemsResponse;
};

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledUl = styled.ul`
  margin: 60px 0 100px 0;
  padding: 0;
`;

const AllRentalItemsUl: FC<Props> = (props) => {
  return (
    <StyledUl>
      {props.item.rental_items.map((item: RentalItemResponse, index: number) => (
        <StyledLi key={index}>
          <AllRentalItemsLi item={item} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default AllRentalItemsUl;
