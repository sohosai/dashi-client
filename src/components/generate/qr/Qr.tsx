import { FC } from 'react';
import QRCode from 'react-qr-code';
import styled from 'styled-components';

type Props = {
  visible_id: string;
};

const StyledQR = styled.div`
  display: inline-block;
  margin: 38.25px 0 0 10px;
  padding: 17.4285714px 17.4285714px 0 17.4285714px;
  //BUG: https://github.com/niklasvh/html2canvas/issues/2739
  // backgroundColor: "white";
  height: 147px;
  border: 2px solid rgb(0, 0, 0);
`;

const StyledHumanReadable = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 27px;
  font-family: ZeroXProto;
  font-weight: bold;
`;

const Qr: FC<Props> = (props) => {
  return (
    <StyledQR>
      <QRCode size={100} value={props.visible_id} bgColor={'#FFFFFF'} fgColor={'#ED6D1F'} />
      <StyledHumanReadable>{props.visible_id}</StyledHumanReadable>
    </StyledQR>
  );
};

export default Qr;
