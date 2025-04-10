import { FC, useEffect, useState } from 'react';
import { ErrorResult } from '../..';
import { ErrorResponse } from '../../../models/errorResponse';
import { SearchConnectorsResponse } from '../../../models/searchConnectorResponse';
import { ConnectorResponse } from '../../../models/connectorResponse';
import { useSortSearchConnector } from '../../../hooks/useSortSearchConnector';
import ConnectorLi from '../li/ConnectorLi';
import styled from 'styled-components';

type Props = {
  result: SearchConnectorsResponse | ErrorResponse;
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
        <StyledUl>
          {result.search_connectors.map((connector: ConnectorResponse, index: number) => (
            <StyledLi key={index}>
              <ConnectorLi connector={connector} />
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default SearchConnectorResult;
