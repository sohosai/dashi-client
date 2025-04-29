import { FC } from 'react';
import QRCode from 'react-qr-code';
import styled from 'styled-components';

type Props = {
  visible_id: string;
};

const StyleQR = styled.div`
  display: 'inline-block',
  margin: '38.25px 0 0 10px',
  padding: '17.4285714px 17.4285714px 0 17.4285714px',
  //BUG: https://github.com/niklasvh/html2canvas/issues/2739
  // backgroundColor: "white",
  height: '147px',
  border: '2px solid rgb(0, 0, 0)',
`
const HumanReadable = styled.p`
  margin: '0',
  padding: '0',
  textAlign: 'center',
  fontSize: '27px',
  fontFamily: 'ZeroXProto',
  fontWeight: 'bold',
`

const Qr: FC<Props> = (props) => {
  return (
    <StyleQR>
      <QRCode size={100} value={props.visible_id} bgColor={'#FFFFFF'} fgColor={'#ED6D1F'} />
      <HumanReadable>
        {props.visible_id}
      </HumanReadable>
    </StyleQR>
  );
};

export default Qr;
