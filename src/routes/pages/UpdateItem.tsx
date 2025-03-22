import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IndividualItemResponse } from '../../model/individualItemResponse';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import { useFetchIndividualItem } from '../../hooks/useFetchIndividualItem';
import { OkResponse } from '../../model/okResponse';
import UpdateItemResult from '../../components/update_item/UpdateItemResult';
import { ErrorResult, Loading, UpdateItemForm } from '../../components';

const UpdateItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  // get individual item result
  const individualItem: IndividualItemResponse | ErrorResponse | Pending = useFetchIndividualItem(id);
  return (
    <>
      {typeof id === 'undefined' ? (
        // 発生しないはず
        <h2>Unexpected Error</h2>
      ) : (
        <>
          {individualItem === 'pending' ? (
            // 処理中
            <Loading />
          ) : 'code' in individualItem && 'message' in individualItem ? (
            // fetchに失敗
            <ErrorResult result={individualItem} />
          ) : (
            // fetch成功 (formを表示)
            <>
              {individualItem.is_rent ? (
                // 貸出中の物品
                <h1>貸出中の物品は編集できません。</h1>
              ) : (
                // 貸出中でない物品
                <>
                  {/* 更新結果 */}
                  {result === null ? (
                    // 初期表示
                    <UpdateItemForm individualItem={individualItem} setResult={setResult} />
                  ) : result === 'pending' ? (
                    // 処理中
                    <Loading />
                  ) : (
                    // fetch結果
                    <UpdateItemResult id={id} result={result} />
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default UpdateItem;
