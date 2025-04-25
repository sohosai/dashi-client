import { FC } from 'react';
import { ReactBarcode } from 'react-jsbarcode';
import styled from 'styled-components';

type Props = {
  visible_id: string;
};

const StyleBarcode = styled.div`
  display: 'inline-block',
  margin: '58.6363636px 0 0 15px',
  padding: '15px 15px 5px 15px',
  //BUG: https://github.com/niklasvh/html2canvas/issues/2739
  // backgroundColor: "white",
  height: '60px',
  width: '158px',
  border: '2px solid rgb(0, 0, 0)',
`
const HumanReadable = styled.p`
  marginTop: '3px',
  margin: '0',
  padding: '0',
  textAlign: 'center',
  fontSize: '18px',
  fontFamily: 'ZeroXProto',
  fontWeight: 'bold',
`

const Barcode: FC<Props> = (props) => {
  return (
    <StyleBarcode>
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

      <HumanReadable>
        {props.visible_id}
      </HumanReadable>
    </StyleBarcode>
  );
};

export default Barcode;
