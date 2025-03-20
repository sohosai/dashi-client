import { FC } from 'react';
import QRCode from 'react-qr-code';

type Props = {
  visible_id: string;
};

const Qr: FC<Props> = (props) => {
  return (
    <div
      style={{
        display: 'inline-block',
        margin: '38.25px 0 0 10px',
        padding: '17.4285714px 17.4285714px 0 17.4285714px',
        //BUG: https://github.com/niklasvh/html2canvas/issues/2739
        // backgroundColor: "white",
        height: '147px',
        border: '2px solid rgb(0, 0, 0)',
      }}
    >
      <QRCode size={100} value={props.visible_id} bgColor={'#FFFFFF'} fgColor={'#ED6D1F'} />
      <p
        style={{
          margin: '0',
          padding: '0',
          textAlign: 'center',
          fontSize: '27px',
          fontFamily: 'ZeroXProto',
          fontWeight: 'bold',
        }}
      >
        {props.visible_id}
      </p>
    </div>
  );
};

export default Qr;
