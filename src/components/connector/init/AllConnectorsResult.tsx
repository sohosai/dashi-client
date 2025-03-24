import { FC, useEffect, useState } from 'react';
import { AllConnectorsResponse } from '../../../model/allConnectorsResponse';
import { ErrorResponse } from '../../../model/errorResponse';
import { ErrorResult, StatusConnector } from '../..';
import { ConnectorResponse } from '../../../model/connectorResponse';
import { useSortAllConnector } from '../../../hooks/useSortAllConnector';

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
  return (
    <>
      {'code' in result && 'message' in result ? (
        <ErrorResult result={result} />
      ) : (
        result.all_connectors.map((connector: ConnectorResponse, index: number) => (
          // それ以外
          <div key={index}>
            <h2>{connector.name}</h2>
            <p>{connector.id}</p>
            <p>{connector.status}</p>
            <StatusConnector id={connector.id} status={connector.status} />
          </div>
        ))
      )}
    </>
  );
};

export default AllColors;
