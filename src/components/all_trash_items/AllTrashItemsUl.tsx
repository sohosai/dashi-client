import { FC } from 'react';
import { AllTrashItemsResponse, TrashItemResponse } from '../../models/allTrashItemResponse';
import AllTrashItemsLi from './AllTrashItemsLi';
import styled from 'styled-components';

type Props = {
  item: AllTrashItemsResponse;
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

const AllTrashItemsUl: FC<Props> = (props) => {
  return (
    <StyledUl>
      {props.item.trash_items.map((item: TrashItemResponse, index: number) => (
        <StyledLi key={index}>
          <AllTrashItemsLi item={item} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default AllTrashItemsUl;
