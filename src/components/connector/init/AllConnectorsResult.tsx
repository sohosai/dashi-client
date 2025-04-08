import { FC, useEffect, useState } from 'react';
import { AllConnectorsResponse } from '../../../model/allConnectorsResponse';
import { ErrorResponse } from '../../../model/errorResponse';
import { ErrorResult } from '../..';
import { ConnectorResponse } from '../../../model/connectorResponse';
import { useSortAllConnector } from '../../../hooks/useSortAllConnector';
import ConnectorLi from '../li/ConnectorLi';
import styled from 'styled-components';

type Props = {
  result: AllConnectorsResponse | ErrorResponse;
};

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledUl = styled.ul`
  margin: 60px 0 100px 0;
  padding: 0;
`;

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
        <StyledUl>
          {result.all_connectors.map((connector: ConnectorResponse, index: number) => (
            // それ以外
            <StyledLi key={index}>
              <ConnectorLi connector={connector} />
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default AllColors;
