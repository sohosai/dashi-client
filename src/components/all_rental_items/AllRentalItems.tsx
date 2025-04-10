import { FC, useEffect, useState } from 'react';
import { ErrorResult } from '..';
import { ErrorResponse } from '../../models/errorResponse';
import { AllRentalItemsResponse, RentalItemResponse } from '../../models/allRentalItemsResponse';
import { useSortRentalItem } from '../../hooks/useSortRentalItem';
import AllRentalItemsLi from './AllRentalItemsLi';
import styled from 'styled-components';

type Props = {
  result: AllRentalItemsResponse | ErrorResponse;
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

const AllRentalItemsResult: FC<Props> = (props) => {
  const [result, useResult] = useState<AllRentalItemsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortRentalItem(props.result));
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
          {result.rental_items.map((item: RentalItemResponse, index: number) => (
            <StyledLi key={index}>
              <AllRentalItemsLi item={item} />
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default AllRentalItemsResult;
