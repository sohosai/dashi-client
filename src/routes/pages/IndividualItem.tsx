import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  DeleteItem,
  ErrorResult,
  ImageItem,
  IndividualItemResult,
  Loading,
  RentRental,
  ReplaceRental,
  TransferItem,
  UpdateRental,
} from '../../components';
import { IndividualItemResponse } from '../../models/individualItemResponse';
import { Pending } from '../../models/pending';
import { ErrorResponse } from '../../models/errorResponse';
import { useFetchIndividualItem } from '../../hooks/useFetchIndividualItem';

const IndividualItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  // get individual item result
  const result: IndividualItemResponse | ErrorResponse | Pending = useFetchIndividualItem(id);
  //早期リターン
  if (typeof id === 'undefined') {
    // 発生しないはず
    return <h2>Unexpected Error</h2>;
  }
  return (
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
          {result.is_rent ? (
            <Link to={``}>貸出中の物品は編集できません。</Link>
          ) : (
            <Link to={`/item/${id}/update`}>更新リンク</Link>
          )}
          <br />
          {/*Image*/}
          <ImageItem id={id} isHidden={result.is_rent ? true : false} />
          {/*Rental*/}
          <>
            <UpdateRental id={id} isHidden={result.id === 1 || !result.is_rent ? true : false} />
            <ReplaceRental id={id} isHidden={result.id === 1 || !result.is_rent ? true : false} />
          </>
          <RentRental id={id} isHidden={result.id === 1 || result.is_rent ? true : false} />
          <br />
          {/*Transfer*/}
          <TransferItem id={id} isHidden={result.id === 1 || result.is_rent ? true : false} />
          <br />
          {/*Delete*/}
          <DeleteItem id={id} isHidden={result.id === 1 || result.is_rent ? true : false} />
        </>
      )}
    </>
  );
};

export default IndividualItem;
