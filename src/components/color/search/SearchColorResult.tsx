import { FC } from 'react';
import { ErrorResult } from '../..';
import { ErrorResponse } from '../../../model/errorResponse';
import { ColorResponse } from '../../../model/colorResponse';
import { SearchColorsResponse } from '../../../model/searchColorResponse';
import StatusColor from '../status/StatusColor';
import HexColor from '../hex/HexColor';

type Props = {
  result: SearchColorsResponse | ErrorResponse;
};

const SearchColorResult: FC<Props> = (props) => {
  return (
    <>
      {'code' in props.result && 'message' in props.result ? (
        <ErrorResult result={props.result} />
      ) : (
        <>
          {props.result.search_colors.map((color: ColorResponse, index: number) => (
            // それ以外
            <div key={index}>
              <h2>{color.name}</h2>
              <p>{color.id}</p>
              <p>{color.hex_color_code}</p>
              <p>{color.status}</p>
              <HexColor id={color.id} hex_color_code={color.hex_color_code} status={color.status} />
              <StatusColor id={color.id} hex_color_code={color.hex_color_code} status={color.status} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SearchColorResult;
