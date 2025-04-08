import { FC } from 'react';
import { ColorResponse } from '../../../model/colorResponse';
import HexColor from '../hex/HexColor';
import StatusColor from '../status/StatusColor';
import styled from 'styled-components';

type Props = {
  color: ColorResponse;
};

const StyledBox = styled.div`
  margin: 30px auto;
  padding: 15px;
  width: 90%;
  max-width: 500px;
  border: #b3b3b3 1px solid;
`;

const StyledLabel = styled.div`
  display: flex;
  width: calc(100% - 15px);
  margin: 0;
  padding: 0;
`;

const StyledName = styled.h2`
  font-size: 3.2rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const StyledPrefix = styled.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 18px 5px 0 0;
  height: 23.5px;
`;

const StyledStatus = styled.p`
  font-size: 1.6rem;
  margin: 0 0 4px 0;
  text-align: center;
`;

const StyledHexColorCode = styled.p`
  font-size: 1.8rem;
  margin: 10px 0 0 0;
  text-align: center;
`;

const StyledStatusWrapper = styled.div`
  width: 112px;
`;

const StyledColorWrapper = styled.div`
  width: 144px;
`;

const StyledColorPalette = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 25px;
  border: 1px solid #b3b3b3;
  margin: 0 auto;
`;

const StyledUtilBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ColorLi: FC<Props> = (props) => {
  return (
    <StyledBox
      style={
        props.color.status === 'Active'
          ? { backgroundColor: '#f6f6f6' }
          : { backgroundColor: 'rgba(246, 246, 246, 0.3)' }
      }
    >
      <StyledLabel>
        <StyledPrefix
          style={props.color.status === 'Active' ? { color: 'rgba(0, 0, 0, 1)' } : { color: 'rgba(0, 0, 0, 0.3)' }}
        >
          色:
        </StyledPrefix>
        <StyledName
          style={
            props.color.status === 'Active'
              ? { color: 'rgba(0, 0, 0, 1)' }
              : { color: 'rgba(0, 0, 0, 0.3)', textDecoration: 'line-through' }
          }
        >
          {props.color.name}
        </StyledName>
      </StyledLabel>
      <StyledUtilBox>
        <StyledStatusWrapper>
          <StyledStatus>{props.color.status === 'Active' ? '利用可能' : '利用不可'}</StyledStatus>
          <StatusColor id={props.color.id} hex_color_code={props.color.hex_color_code} status={props.color.status} />
        </StyledStatusWrapper>
        <StyledColorWrapper>
          <StyledColorPalette
            style={
              props.color.status === 'Active'
                ? { backgroundColor: `${props.color.hex_color_code}` }
                : { backgroundColor: `${props.color.hex_color_code}`, opacity: 0.3 }
            }
          ></StyledColorPalette>
          <StyledHexColorCode
            style={
              props.color.status === 'Active'
                ? { color: 'rgba(0, 0, 0, 1)' }
                : { color: 'rgba(0, 0, 0, 0.3)', textDecoration: 'line-through' }
            }
          >
            {props.color.hex_color_code}
          </StyledHexColorCode>
          <HexColor id={props.color.id} hex_color_code={props.color.hex_color_code} status={props.color.status} />
        </StyledColorWrapper>
      </StyledUtilBox>
    </StyledBox>
  );
};

export default ColorLi;
