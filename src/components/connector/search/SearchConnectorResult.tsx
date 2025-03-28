import { FC, useEffect, useState } from 'react';
import { ErrorResult, StatusConnector } from '../..';
import { ErrorResponse } from '../../../model/errorResponse';
import { SearchConnectorsResponse } from '../../../model/searchConnectorResponse';
import { ConnectorResponse } from '../../../model/connectorResponse';
import { useSortSearchConnector } from '../../../hooks/useSortSearchConnector';

type Props = {
  result: SearchConnectorsResponse | ErrorResponse;
};

const SearchConnectorResult: FC<Props> = (props) => {
  const [result, useResult] = useState<SearchConnectorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortSearchConnector(props.result));
    }
  }, [props.result]);
  return (
    <>
      {'code' in result && 'message' in result ? (
        <ErrorResult result={result} />
      ) : (
        <>
          {result.search_connectors.map((connector: ConnectorResponse, index: number) => (
            // それ以外
            <div key={index}>
              <h2>{connector.name}</h2>
              <p>{connector.id}</p>
              <p>{connector.status}</p>
              <StatusConnector id={connector.id} status={connector.status} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SearchConnectorResult;
