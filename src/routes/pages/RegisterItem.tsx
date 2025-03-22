import { FC, useState } from 'react';
import { ErrorResult, Loading, RegisterItemForm, RegisterItemResult } from '../../components';
import { ErrorResponse } from '../../model/errorResponse';
import { OkResponse } from '../../model/okResponse';
import { Pending } from '../../model/pending';
import { AllConnectorsResponse } from '../../model/allConnectorsResponse';
import { useFetchAllConnectors } from '../../hooks/useFetchAllConnectors';
import { AllColorsResponse } from '../../model/allColorsResponse';
import { useFetchAllColors } from '../../hooks/useFetchAllColors';

const RegisterItem: FC = () => {
  const [result, setResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  // fetch all connectors and colors
  const connectors: ErrorResponse | Pending | AllConnectorsResponse = useFetchAllConnectors();
  const colors: ErrorResponse | Pending | AllColorsResponse = useFetchAllColors();
  return (
    <>
      <h1>Register</h1>
      {result === null ? (
        // 初期表示
        <>
          {connectors === 'pending' || colors === 'pending' ? (
            <Loading />
          ) : 'all_connectors' in connectors && 'all_colors' in colors ? (
            <RegisterItemForm setResult={setResult} />
          ) : (
            // 初期表示に必要な情報に関するfetchエラー
            <>
              {'all_connectors' in connectors ? (
                <p>ok</p>
              ) : (
                // fetchに失敗
                <ErrorResult result={connectors} />
              )}
              {'all_colors' in colors ? (
                <p>ok</p>
              ) : (
                // fetchに失敗
                <ErrorResult result={colors} />
              )}
            </>
          )}
        </>
      ) : result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <RegisterItemResult result={result} />
      )}
    </>
  );
};

export default RegisterItem;
