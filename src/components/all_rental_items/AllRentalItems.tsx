import { FC, useEffect, useState } from 'react';
import { ErrorResult } from '..';
import { ErrorResponse } from '../../models/errorResponse';
import { AllRentalItemsResponse } from '../../models/allRentalItemsResponse';
import { useSortRentalItem } from '../../hooks/useSortRentalItem';
import AllRentalItemsUl from './AllRentalItemsUl';

type Props = {
  result: AllRentalItemsResponse | ErrorResponse;
};

const AllRentalItemsResult: FC<Props> = (props) => {
  const [result, useResult] = useState<AllRentalItemsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortRentalItem(props.result));
    }
  }, [props.result]);
  return 'code' in result && 'message' in result ? (
    // fetchに失敗
    <ErrorResult result={result} />
  ) : (
    // fetch成功
    <AllRentalItemsUl item={result} />
  );
};

export default AllRentalItemsResult;
