import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type Props = {
  setIsRent: Dispatch<SetStateAction<boolean>>;
};

const StyledDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

const StyledLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 35px;
  border-radius: 50px;
  background-color: #f6f6f6;
  cursor: pointer;
  transition: background-color 0.4s;
  &:has(:checked) {
    background-color: #c7d01c;
  }
  &::after {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
    background-color: #fff;
    content: '';
    transition: left 0.4s;
  }
  &:has(:checked)::after {
    left: 46.5px;
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const SearchItemIsRentButton = (props: Props) => {
  return (
    <div>
      <StyledDescription>貸し出し中物品フィルター</StyledDescription>
      <StyledLabelWrapper>
        <StyledLabel>
          <StyledInput type="checkbox" onChange={() => props.setIsRent((prev) => !prev)} />
        </StyledLabel>
      </StyledLabelWrapper>
    </div>
  );
};
export default SearchItemIsRentButton;
