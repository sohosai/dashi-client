import { FC } from 'react';
import { ReactBarcode } from 'react-jsbarcode';

type Props = {
  visible_id: string;
};

const Barcode: FC<Props> = (props) => {
  return (
    <div
      style={{
        display: 'inline-block',
        margin: '58.6363636px 0 0 15px',
        padding: '15px 15px 5px 15px',
        //BUG: https://github.com/niklasvh/html2canvas/issues/2739
        // backgroundColor: "white",
        height: '60px',
        width: '158px',
        border: '2px solid rgb(0, 0, 0)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactBarcode
          value={props.visible_id}
          options={{
            format: 'code128',
            height: 35,
            displayValue: false,
            lineColor: '#ED6D1F',
            margin: 0,
          }}
        />
      </div>

      <p
        style={{
          marginTop: '3px',
          margin: '0',
          padding: '0',
          textAlign: 'center',
          fontSize: '18px',
          fontFamily: 'ZeroXProto',
          fontWeight: 'bold',
        }}
      >
        {props.visible_id}
      </p>
    </div>
  );
};

export default Barcode;
