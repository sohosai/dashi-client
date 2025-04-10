import { FC, useEffect, useState } from 'react';
import { AllColorsResponse } from '../../../models/allColorsResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import { ErrorResult } from '../..';
import { ColorResponse } from '../../../models/colorResponse';
import { useSortAllColor } from '../../../hooks/useSortAllColor';
import ColorLi from '../li/ColorLi';
import styled from 'styled-components';

type Props = {
  result: AllColorsResponse | ErrorResponse;
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
  const [result, useResult] = useState<AllColorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortAllColor(props.result));
    }
  }, [props.result]);
  return (
    <>
      {'code' in result && 'message' in result ? (
        <ErrorResult result={result} />
      ) : (
        <StyledUl>
          {result.all_colors.map((color: ColorResponse, index: number) => (
            <StyledLi key={index}>
              <ColorLi color={color} />
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default AllColors;
