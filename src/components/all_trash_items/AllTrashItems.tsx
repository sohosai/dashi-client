import { FC, useEffect, useState } from 'react';
import { AllTrashItemsResponse, TrashItemResponse } from '../../model/allTrashItemResponse';
import { ErrorResult } from '..';
import { ErrorResponse } from '../../model/errorResponse';
import { useSortTrashItem } from '../../hooks/useSortTrashItem';
import AllTrashItemsLi from './AllTrashItemsLi';
import styled from 'styled-components';

type Props = {
  result: AllTrashItemsResponse | ErrorResponse;
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

const AllTrashItems: FC<Props> = (props) => {
  const [result, useResult] = useState<AllTrashItemsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortTrashItem(props.result));
    }
  }, [props.result]);
  return (
    <>
      {'code' in result && 'message' in result ? (
        // fetchに失敗
        <ErrorResult result={result} />
      ) : (
        // fetch成功
        <StyledUl>
          {result.trash_items.map((item: TrashItemResponse, index: number) => (
            <StyledLi key={index}>
              <AllTrashItemsLi item={item} />
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default AllTrashItems;
