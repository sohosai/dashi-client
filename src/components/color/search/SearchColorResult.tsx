import { FC, useEffect, useState } from 'react';
import { ErrorResult } from '../..';
import { ErrorResponse } from '../../../model/errorResponse';
import { ColorResponse } from '../../../model/colorResponse';
import { SearchColorsResponse } from '../../../model/searchColorResponse';
import StatusColor from '../status/StatusColor';
import HexColor from '../hex/HexColor';
import { useSortSearchColor } from '../../../hooks/useSortSearchColor';

type Props = {
  result: SearchColorsResponse | ErrorResponse;
};

const SearchColorResult: FC<Props> = (props) => {
  const [result, useResult] = useState<SearchColorsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortSearchColor(props.result));
    }
  }, [props.result]);
  return (
    <>
      {'code' in result && 'message' in result ? (
        <ErrorResult result={result} />
      ) : (
        <>
          {result.search_colors.map((color: ColorResponse, index: number) => (
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
