import { FC } from 'react';
import { ErrorResult } from '..';
import { ErrorResponse } from '../../model/errorResponse';
import { AllRentalItemsResponse } from '../../model/allRentalItemsResponse';

type Props = {
  result: AllRentalItemsResponse | ErrorResponse;
};

const AllRentalItemsResult: FC<Props> = (props) => {
  return (
    <>
      {'code' in props.result && 'message' in props.result ? (
        // fetchに失敗
        <ErrorResult result={props.result} />
      ) : (
        // fetch成功
        props.result.rental_items.map((item, index) => (
          <div key={index}>
            <p>id: {item.id}</p>
            <p>visible_id: {item.visible_id}</p>
            <p>record: {item.record}</p>
            <p>name: {item.name}</p>
            <p>product_number: {item.product_number}</p>
            <p>description: {item.description}</p>
            <p>purchase_year: {item.purchase_year ?? ''}</p>
            <p>purchase_price: {item.purchase_price ?? ''}</p>
            <p>durability: {item.durability ?? ''}</p>
            <p>is_depreciation: {item.is_depreciation ? '減価償却する' : '減価償却しない'}</p>
            <p>connector: {item.connector.join(',')}</p>
            <p>is_rent: {item.is_rent ? 'レンタル不可' : 'レンタル可'}</p>
            <p>color: {item.color}</p>
            <p>created_at: {item.created_at}</p>
            <p>updated_at: {item.updated_at}</p>
            <p>recipient: {item.recipient}</p>
            <p>rental_description: {item.rental_description}</p>
            <p>latest_rent_at: {item.latest_rent_at ?? ''}</p>
            <p>scheduled_replace_at: {item.scheduled_replace_at ?? ''}</p>
            <p>latest_replace_at: {item.latest_replace_at ?? ''}</p>
          </div>
        ))
      )}
    </>
  );
};

export default AllRentalItemsResult;
