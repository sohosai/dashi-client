import { FC } from 'react';
import { Loading, TrashItemsResult } from '../../components';
import { Pending } from '../../model/pending';
import { ErrorResponse } from '../../model/errorResponse';
import { TrashItemsResponse } from '../../model/trashItemResponse';
import { useFetchTrashItems } from '../../hooks/useFetchTrashItems';

const TrashItem: FC = () => {
  // get trash item result
  const result: TrashItemsResponse | ErrorResponse | Pending = useFetchTrashItems();
  return (
    <>
      <h1>Trash Items</h1>
      {result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <TrashItemsResult result={result} />
      )}
    </>
  );
};

export default TrashItem;
