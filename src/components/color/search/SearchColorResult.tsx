import { FC, useEffect, useState } from 'react';
import { ErrorResult } from '../..';
import { ErrorResponse } from '../../../models/errorResponse';
import { SearchColorsResponse } from '../../../models/searchColorResponse';
import { useSortSearchColor } from '../../../hooks/useSortSearchColor';
import SearchColorUl from '../list/SerachColorUl';

type Props = {
  result: SearchColorsResponse | ErrorResponse;
};

const SearchColorResult: FC<Props> = (props) => {
  const [result, useResult] = useState<SearchColorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortSearchColor(props.result));
    }
  }, [props.result]);
  return 'code' in result && 'message' in result ? (
    // fetch失敗
    <ErrorResult result={result} />
  ) : (
    // fetch成功
    <SearchColorUl color={result} />
  );
};

export default SearchColorResult;
