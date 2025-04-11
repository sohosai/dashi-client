import { FC, useEffect, useState } from 'react';
import { AllTrashItemsResponse } from '../../models/allTrashItemResponse';
import { ErrorResult } from '..';
import { ErrorResponse } from '../../models/errorResponse';
import { useSortTrashItem } from '../../hooks/useSortTrashItem';
import AllTrashItemsUl from './AllTrashItemsUl';

type Props = {
  result: AllTrashItemsResponse | ErrorResponse;
};

const AllTrashItems: FC<Props> = (props) => {
  const [result, useResult] = useState<AllTrashItemsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortTrashItem(props.result));
    }
  }, [props.result]);
  return 'code' in result && 'message' in result ? (
    // fetchに失敗
    <ErrorResult result={result} />
  ) : (
    // fetch成功
    <AllTrashItemsUl item={result} />
  );
};

export default AllTrashItems;
