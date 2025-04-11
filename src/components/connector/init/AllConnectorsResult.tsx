import { FC, useEffect, useState } from 'react';
import { AllConnectorsResponse } from '../../../models/allConnectorsResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import { ErrorResult } from '../..';
import { useSortAllConnector } from '../../../hooks/useSortAllConnector';
import AllConnectorUl from '../list/AllConnectorUl';

type Props = {
  result: AllConnectorsResponse | ErrorResponse;
};

const AllColors: FC<Props> = (props) => {
  const [result, useResult] = useState<AllConnectorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortAllConnector(props.result));
    }
  }, [props.result]);
  return 'code' in result && 'message' in result ? (
    // fetch失敗
    <ErrorResult result={result} />
  ) : (
    // fetch成功
    <AllConnectorUl connector={result} />
  );
};

export default AllColors;
