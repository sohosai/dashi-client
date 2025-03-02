import { FC } from 'react';
import { AllConnectorsResponse } from '../../../model/allConnectorsResponse';
import { ErrorResponse } from '../../../model/errorResponse';
import { Pending } from '../../../model/pending';
import { ErrorResult, Loading, StatusConnector } from '../..';
import { ConnectorResponse } from '../../../model/connectorResponse';

type Props = {
  result: AllConnectorsResponse | ErrorResponse | Pending;
};

const AllConnectors: FC<Props> = (props) => {
  return (
    <>
      {props.result === 'pending' ? (
        // 初期状態
        <Loading />
      ) : 'code' in props.result && 'message' in props.result ? (
        <ErrorResult result={props.result} />
      ) : (
        <>
          {props.result.all_connectors.map((connector: ConnectorResponse, index: number) => (
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

export default AllConnectors;
