import { FC } from 'react';
import { SearchItemResponse } from '../../model/searchItemResponse';
import { Link } from 'react-router-dom';

type Props = {
  item: SearchItemResponse;
};

const SearchItemResult: FC<Props> = (props) => {
  return (
    <div>
      <h2>name: {props.item.name}</h2>
      <p>id: {props.item.id}</p>
      <p>visible_id: {props.item.visible_id}</p>
      <p>record: {props.item.record}</p>
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
      <p>recipient: {props.item.recipient}</p>
      <p>rental_description: {props.item.rental_description}</p>
      <p>latest_rent_at: {props.item.latest_rent_at}</p>
      <p>scheduled_replace_at: {props.item.scheduled_replace_at}</p>
      <p>latest_replace_at: {props.item.latest_replace_at}</p>
      <Link to={`/item/${props.item.id}`}>詳細</Link>
    </div>
  );
};

export default SearchItemResult;
