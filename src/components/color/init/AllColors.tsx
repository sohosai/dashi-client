import { FC } from 'react';
import { ErrorResponse } from '../../../model/errorResponse';
import { Pending } from '../../../model/pending';
import { ErrorResult, Loading } from '../..';
import { AllColorsResponse } from '../../../model/allColorsResponse';
import { ColorResponse } from '../../../model/colorResponse';
import StatusColor from '../status/StatusColor';
import HexColor from '../hex/HexColor';

type Props = {
  result: AllColorsResponse | ErrorResponse | Pending;
};

const AllColors: FC<Props> = (props) => {
  return (
    <>
      {props.result === 'pending' ? (
        // 初期状態
        <Loading />
      ) : 'code' in props.result && 'message' in props.result ? (
        <ErrorResult result={props.result} />
      ) : (
        <>
          {props.result.all_colors.map((color: ColorResponse, index: number) => (
            // それ以外
            <div key={index}>
              <h2>{color.name}</h2>
              <p>{color.id}</p>
              <p>{color.status}</p>
              <p>{color.hex_color_code}</p>
              <HexColor id={color.id} hex_color_code={color.hex_color_code} status={color.status} />
              <StatusColor id={color.id} hex_color_code={color.hex_color_code} status={color.status} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default AllColors;
