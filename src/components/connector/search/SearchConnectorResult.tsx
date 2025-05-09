import { FC, useEffect, useState } from 'react';
import { ErrorResult } from '../..';
import { ErrorResponse } from '../../../models/errorResponse';
import { SearchConnectorsResponse } from '../../../models/searchConnectorResponse';
import { useSortSearchConnector } from '../../../hooks/useSortSearchConnector';
import SearchConnectorUl from '../list/SearchConnectorUl';
import styled from 'styled-components';

type Props = {
  result: SearchConnectorsResponse | ErrorResponse;
};

const StyledErrorResultWrapper = styled.div`
  margin-top: 53px;
`

const SearchConnectorResult: FC<Props> = (props) => {
  const [result, useResult] = useState<SearchConnectorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortSearchConnector(props.result));
    }
  }, [props.result]);
  return 'code' in result && 'message' in result ? (
    // fetch失敗
    <StyledErrorResultWrapper>
      <ErrorResult result={result} />
    </StyledErrorResultWrapper>
  ) : (
    // fetch成功
    <SearchConnectorUl connector={result} />
  );
};

export default SearchConnectorResult;
