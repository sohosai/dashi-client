import { FC, useState } from 'react';
import { GenerateResponse } from '../../models/generateResponse';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import { CsvBox, GenerateForm, GenerateResult, Loading, Title } from '../../components';
import { Record } from '../../models/generateRequest';

const Generate: FC = () => {
  // get generate result
  const [result, setResult] = useState<GenerateResponse | ErrorResponse | Pending | null>(null);
  // get record type
  const [recordType, setRecordType] = useState<Record | null>(null);
  return (
    <>
      <Title title="ラベル / csv の生成" />
      <CsvBox />
      <GenerateForm setResult={setResult} setRecordType={setRecordType} />
      {result === null ? (
        //初期表示
        <></>
      ) : result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <GenerateResult result={result} recordType={recordType} />
      )}
    </>
  );
};

export default Generate;
