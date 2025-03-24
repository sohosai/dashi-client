import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IndividualItemResponse } from '../../model/individualItemResponse';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import { useFetchIndividualItem } from '../../hooks/useFetchIndividualItem';
import { OkResponse } from '../../model/okResponse';
import { ErrorResult, Loading } from '../../components';
import UpdateRentalForm from '../../components/update_rental/UpdateRentalForm';
import UpdateRentalResult from '../../components/update_rental/UpdateRentalResult';

const UpdateRental: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  // get individual item result
  const individualItem: IndividualItemResponse | ErrorResponse | Pending = useFetchIndividualItem(id);
  //早期リターン
  if (typeof id === 'undefined') {
    // 発生しないはず
    return <h2>Unexpected Error</h2>;
  }
  return (
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
          {result === null ? (
            // 初期表示
            <UpdateRentalForm individualItem={individualItem} setResult={setResult} />
          ) : result === 'pending' ? (
            // 処理中
            <Loading />
          ) : (
            // fetch結果
            <UpdateRentalResult id={id} result={result} />
          )}
        </>
      )}
    </>
  );
};

export default UpdateRental;
