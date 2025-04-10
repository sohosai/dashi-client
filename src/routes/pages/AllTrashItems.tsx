import { FC } from 'react';
import { Loading, AllTrashItems, Title } from '../../components';
import { Pending } from '../../models/pending';
import { ErrorResponse } from '../../models/errorResponse';
import { AllTrashItemsResponse } from '../../models/allTrashItemResponse';
import { useFetchTrashItems } from '../../hooks/useFetchTrashItems';

const TrashItem: FC = () => {
  // get trash item result
  const result: AllTrashItemsResponse | ErrorResponse | Pending = useFetchTrashItems();
  return (
    <>
      <Title title="削除物品情報の履歴" />
      {result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <AllTrashItems result={result} />
      )}
    </>
  );
};

export default TrashItem;
