import { FC, useState } from 'react';
import { ErrorResult, Loading, RegisterItemForm, RegisterItemResult, Title } from '../../components';
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
      <Title title="物品情報の登録" />
      {result === null ? (
        // 初期表示
        <>
          {connectors === 'pending' || colors === 'pending' ? (
            // 初期表示の処理中
            <Loading />
          ) : 'all_connectors' in connectors && 'all_colors' in colors ? (
            // 初期表示のfetch成功 (connector color)
            <RegisterItemForm setResult={setResult} />
          ) : (
            // 初期表示のfetch失敗 (connector color)
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
