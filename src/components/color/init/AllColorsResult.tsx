import { FC, useEffect, useState } from 'react';
import { AllColorsResponse } from '../../../models/allColorsResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import { ErrorResult } from '../..';
import { useSortAllColor } from '../../../hooks/useSortAllColor';
import AllColorUl from '../list/AllColorUl';
import styled from 'styled-components';

type Props = {
  result: AllColorsResponse | ErrorResponse;
};

const StyledErrorResultWrapper = styled.div`
  margin-top: 53px;
`

const AllColors: FC<Props> = (props) => {
  const [result, useResult] = useState<AllColorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortAllColor(props.result));
    }
  }, [props.result]);
  return 'code' in result && 'message' in result ? (
    // fetch失敗
    <StyledErrorResultWrapper>
      <ErrorResult result={result} />
    </StyledErrorResultWrapper>
  ) : (
    // fetch成功
    <AllColorUl color={result} />
  );
};

export default AllColors;
