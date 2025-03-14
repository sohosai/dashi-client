import { FC } from 'react';
import { SearchItemResponse, SearchItemsResponse } from '../../model/searchItemResponse';
import { ErrorResponse } from '../../model/errorResponse';
import { ErrorResult } from '..';
import SearchItemResult from './SearchItemResult';

type Props = {
  result: SearchItemsResponse | ErrorResponse;
  isRent: boolean;
};

const SearchItemResultList: FC<Props> = (props) => {
  return (
    <>
      {'code' in props.result && 'message' in props.result ? (
        <ErrorResult result={props.result} />
      ) : (
        <ul>
          {props.result.search_items.map((item: SearchItemResponse, index: number) => (
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
