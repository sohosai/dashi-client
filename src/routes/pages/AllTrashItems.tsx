import { FC } from 'react';
import { Loading, AllTrashItemsResult } from '../../components';
import { Pending } from '../../model/pending';
import { ErrorResponse } from '../../model/errorResponse';
import { AllTrashItemsResponse } from '../../model/allTrashItemResponse';
import { useFetchTrashItems } from '../../hooks/useFetchTrashItems';

const TrashItem: FC = () => {
  // get trash item result
  const result: AllTrashItemsResponse | ErrorResponse | Pending = useFetchTrashItems();
  return (
    <>
      <h1>Trash Items</h1>
      {result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <AllTrashItemsResult result={result} />
      )}
    </>
  );
};

export default TrashItem;
