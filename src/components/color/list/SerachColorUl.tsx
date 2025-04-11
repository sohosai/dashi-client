import { FC } from 'react';
import { ColorResponse } from '../../../models/colorResponse';
import ColorLi from './ColorLi';
import { SearchColorsResponse } from '../../../models/searchColorResponse';
import { StyledLi, StyledUl } from './ulStyle';

type Props = {
  color: SearchColorsResponse;
};

const SearchColorUl: FC<Props> = (props) => {
  return (
    <StyledUl>
      {props.color.search_colors.map((color: ColorResponse, index: number) => (
        <StyledLi key={index}>
          <ColorLi color={color} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default SearchColorUl;
