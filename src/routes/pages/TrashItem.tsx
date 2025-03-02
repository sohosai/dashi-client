import { FC } from 'react';
import { Loading, TrashItemResult } from '../../components';
import { Pending } from '../../model/pending';
import { ErrorResponse } from '../../model/errorResponse';
import { TrashItemsResponse } from '../../model/trashItemResponse';
import { useFetchTrashItem } from '../../hooks/useFetchTrashItem';

const TrashItem: FC = () => {
  // get trash item result
  const result: TrashItemsResponse | ErrorResponse | Pending = useFetchTrashItem();
  return (
    <>
      <h1>Trash Items</h1>
      {result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <TrashItemResult result={result} />
      )}
    </>
  );
};

export default TrashItem;
