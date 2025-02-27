import { FC } from 'react';
import { TrashItemsResponse } from '../../model/trashItemResponse';
import { ErrorResult } from '..';
import { ErrorResponse } from '../../model/errorResponse';

type Props = {
  result: TrashItemsResponse | ErrorResponse;
};

const IndividualItemResult: FC<Props> = (props) => {
  return (
    <>
      {'code' in props.result && 'message' in props.result ? (
        // fetchに失敗
        <ErrorResult result={props.result} />
      ) : (
        // fetch成功
        props.result.trash_items.map((item, index) => (
          <div key={index}>
            <p>id: {item.id}</p>
            <p>item_id: {item.item_id}</p>
            <p>visible_id: {item.visible_id}</p>
            <p>name: {item.name}</p>
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
          </div>
        ))
      )}
    </>
  );
};

export default IndividualItemResult;
