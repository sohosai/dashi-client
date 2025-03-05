import { FC } from 'react';
import { SearchItemResponse, SearchItemsResponse } from '../../model/searchItemResponse';
import { Link } from 'react-router-dom';
import { ErrorResult } from '..';
import { ErrorResponse } from '../../model/errorResponse';

type Props = {
  result: SearchItemsResponse | ErrorResponse;
};

const SearchItemResult: FC<Props> = (props) => {
  return (
    <>
      {'code' in props.result && 'message' in props.result ? (
        <ErrorResult result={props.result} />
      ) : (
        <>
          {props.result.search_items.map((item: SearchItemResponse, index: number) => (
            // それ以外
            <div key={index}>
              <h2>name: {item.name}</h2>
              <p>id: {item.id}</p>
              <p>visible_id: {item.visible_id}</p>
              <p>record: {item.record}</p>
              <p>product_number: {item.product_number}</p>
              <p>description: {item.description}</p>
              <p>purchase_year: {item.purchase_year ?? ''}</p>
              <p>purchase_price: {item.purchase_price ?? ''}</p>
              <p>durability: {item.durability ?? ''}</p>
              <p>is_depreciation: {item.is_depreciation ? '減価償却する' : '減価償却しない'}</p>
              <p>connector: {item.connector.join(',')}</p>
              <p>color: {item.color}</p>
              <p>is_rent: {item.is_rent ? 'レンタル不可' : 'レンタル可'}</p>
              <p>created_at: {item.created_at}</p>
              <p>updated_at: {item.updated_at}</p>
              <p>recipient: {item.recipient}</p>
              <p>rental_description: {item.rental_description}</p>
              <p>latest_rent_at: {item.latest_rent_at}</p>
              <p>scheduled_replace_at: {item.scheduled_replace_at}</p>
              <p>latest_replace_at: {item.latest_replace_at}</p>
              <Link to={`/item/${item.id}`}>詳細</Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SearchItemResult;
