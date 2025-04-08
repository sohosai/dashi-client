import { FC } from 'react';
import { TrashItemResponse } from '../../model/allTrashItemResponse';
import styled from 'styled-components';

type Props = {
  item: TrashItemResponse;
};

const StyledBox = styled.div`
  margin: 30px auto;
  padding: 15px;
  width: 90%;
  max-width: 800px;
  background-color: #f6f6f6;
  border: #b3b3b3 1px solid;
`;

const AllTrashItemsLi: FC<Props> = (props) => {
  return (
    <StyledBox>
      <p>id: {props.item.id}</p>
      <p>item_id: {props.item.item_id}</p>
      <p>visible_id: {props.item.visible_id}</p>
      <p>name: {props.item.name}</p>
      <p>product_number: {props.item.product_number}</p>
      <p>description: {props.item.description}</p>
      <p>purchase_year: {props.item.purchase_year ?? ''}</p>
      <p>purchase_price: {props.item.purchase_price ?? ''}</p>
      <p>durability: {props.item.durability ?? ''}</p>
      <p>is_depreciation: {props.item.is_depreciation ? '減価償却する' : '減価償却しない'}</p>
      <p>connector: {props.item.connector.join(',')}</p>
      <p>color: {props.item.color}</p>
      <p>is_rent: {props.item.is_rent ? 'レンタル不可' : 'レンタル可'}</p>
      <p>created_at: {props.item.created_at}</p>
      <p>updated_at: {props.item.updated_at}</p>
    </StyledBox>
  );
};

export default AllTrashItemsLi;
