import { FC } from 'react';
import { ColorResponse } from '../../../models/colorResponse';
import { AllColorsResponse } from '../../../models/allColorsResponse';
import ColorLi from './ColorLi';
import { StyledLi, StyledUl } from './ulStyle';

type Props = {
  color: AllColorsResponse;
};

const AllColorUl: FC<Props> = (props) => {
  return (
    <StyledUl>
      {props.color.all_colors.map((color: ColorResponse, index: number) => (
        <StyledLi key={index}>
          <ColorLi color={color} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default AllColorUl;
