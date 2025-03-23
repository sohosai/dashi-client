import { FC, useEffect, useState } from 'react';
import { SearchItemResponse, SearchItemsResponse } from '../../model/searchItemResponse';
import { ErrorResponse } from '../../model/errorResponse';
import { ErrorResult } from '..';
import SearchItemResult from './SearchItemResult';
import { useSortSearchItem } from '../../hooks/useSortSearchItem';

type Props = {
  result: SearchItemsResponse | ErrorResponse;
  isRent: boolean;
};

const SearchItemResultList: FC<Props> = (props) => {
  const [result, useResult] = useState<SearchItemsResponse | ErrorResponse>(props.result);
  useEffect(() => {
    if (!('code' in props.result && 'message' in props.result)) {
      useResult(useSortSearchItem(props.result));
    }
  }, [props.result]);
  return (
    <>
      {'code' in result && 'message' in result ? (
        <ErrorResult result={result} />
      ) : (
        <ul>
          {result.search_items.map((item: SearchItemResponse, index: number) => (
            <li key={index}>
              {props.isRent ? (
                <>
                  {/* props.isRent === true のときだけフィルターする */}
                  {item.is_rent ? <></> : <SearchItemResult item={item} />}
                </>
              ) : (
                <SearchItemResult item={item} />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchItemResultList;
