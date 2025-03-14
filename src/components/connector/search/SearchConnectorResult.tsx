import { FC } from 'react';
import { ErrorResult, StatusConnector } from '../..';
import { ErrorResponse } from '../../../model/errorResponse';
import { SearchConnectorsResponse } from '../../../model/searchConnectorResponse';
import { ConnectorResponse } from '../../../model/connectorResponse';

type Props = {
  result: SearchConnectorsResponse | ErrorResponse;
};

const SearchConnectorResult: FC<Props> = (props) => {
  return (
    <>
      {'code' in props.result && 'message' in props.result ? (
        <ErrorResult result={props.result} />
      ) : (
        <>
          {props.result.search_connectors.map((connector: ConnectorResponse, index: number) => (
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
