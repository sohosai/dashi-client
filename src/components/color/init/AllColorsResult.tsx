import { FC, useEffect, useState } from 'react';
import { AllColorsResponse } from '../../../model/allColorsResponse';
import { ErrorResponse } from '../../../model/errorResponse';
import { ErrorResult, StatusColor } from '../..';
import { ColorResponse } from '../../../model/colorResponse';
import HexColor from '../hex/HexColor';
import { useSortAllColor } from '../../../hooks/useSortAllColor';

type Props = {
  result: AllColorsResponse | ErrorResponse;
};

const AllColors: FC<Props> = (props) => {
  const [result, useResult] = useState<AllColorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortAllColor(props.result));
    }
  }, [props.result]);
  return (
    <>
      {'code' in result && 'message' in result ? (
        <ErrorResult result={result} />
      ) : (
        result.all_colors.map((color: ColorResponse, index: number) => (
          <div key={index}>
            <h2>{color.name}</h2>
            <p>{color.id}</p>
            <p>{color.status}</p>
            <p>{color.hex_color_code}</p>
            <HexColor id={color.id} hex_color_code={color.hex_color_code} status={color.status} />
            <StatusColor id={color.id} hex_color_code={color.hex_color_code} status={color.status} />
          </div>
        ))
      )}
    </>
  );
};

export default AllColors;
