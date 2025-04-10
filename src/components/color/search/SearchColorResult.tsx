import { FC, useEffect, useState } from 'react';
import { ErrorResult } from '../..';
import { ErrorResponse } from '../../../models/errorResponse';
import { ColorResponse } from '../../../models/colorResponse';
import { SearchColorsResponse } from '../../../models/searchColorResponse';
import { useSortSearchColor } from '../../../hooks/useSortSearchColor';
import ColorLi from '../li/ColorLi';
import styled from 'styled-components';

type Props = {
  result: SearchColorsResponse | ErrorResponse;
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

const SearchColorResult: FC<Props> = (props) => {
  const [result, useResult] = useState<SearchColorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortSearchColor(props.result));
    }
  }, [props.result]);
  return (
    <>
      {'code' in result && 'message' in result ? (
        <ErrorResult result={result} />
      ) : (
        <StyledUl>
          {result.search_colors.map((color: ColorResponse, index: number) => (
            <StyledLi key={index}>
              <ColorLi color={color} />
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default SearchColorResult;
