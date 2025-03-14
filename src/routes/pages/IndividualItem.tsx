import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  DeleteItem,
  ErrorResult,
  ImageItem,
  IndividualItemResult,
  Loading,
  ReplaceRental,
  TransferItem,
} from '../../components';
import { IndividualItemResponse } from '../../model/individualItemResponse';
import { Pending } from '../../model/pending';
import { ErrorResponse } from '../../model/errorResponse';
import { useFetchIndividualItem } from '../../hooks/useFetchIndividualItem';

const IndividualItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  // get individual item result
  const result: IndividualItemResponse | ErrorResponse | Pending = useFetchIndividualItem(id);
  return (
    <>
      {typeof id === 'undefined' ? (
        // 発生しないはず
        <h2>Unexpected Error</h2>
      ) : (
        <>
          {result === 'pending' ? (
            // 処理中
            <Loading />
          ) : 'code' in result && 'message' in result ? (
            // fetchに失敗
            <ErrorResult result={result} />
          ) : (
            // fetch成功
            <>
              <IndividualItemResult result={result} />
              {/*Update*/}
              <Link to={`/item/${id}/update`}>更新リンク</Link>
              <br />
              {/*Image*/}
              <ImageItem id={id} />
              {/*Rental*/}
              {result.is_rent ? (
                <>
                  <Link to={`/rental/${id}/update`}>貸し出し情報の更新</Link>
                  <ReplaceRental id={id} />
                </>
              ) : (
                <Link to={`/rental/${id}/rent`}>貸し出し</Link>
              )}
              <br />
              {/*Transfer*/}
              {/* TODO: root itemの処理を追加 */}
              <TransferItem id={id} isRoot={result.id === 1 ? true : false} />
              <br />
              {/*Delete*/}
              {/* TODO: root itemの処理を追加 */}
              <DeleteItem id={id} isRoot={result.id === 1 ? true : false} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default IndividualItem;
