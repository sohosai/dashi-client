import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import { OkResponse } from '../../model/okResponse';
import { Loading, RentRentalForm, RentRentalResult } from '../../components';

const RentRental: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  //早期リターン
  if (typeof id === 'undefined') {
    // 発生しないはず
    return <h2>Unexpected Error</h2>;
  }
  return (
    <>
      {result === null ? (
        // 初期表示
        <RentRentalForm id={id} setResult={setResult} />
      ) : result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <RentRentalResult id={id} result={result} />
      )}
    </>
  );
};

export default RentRental;
