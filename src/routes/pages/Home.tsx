import { Link, useLocation } from 'react-router-dom';
import { FC, useState } from 'react';
import { SearchItemsResponse } from '../../model/searchItemResponse';
import { useFetchSearchItemWithUseEffect } from '../../hooks/useFetchSearchItemWithUseEffect';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import {
  DepreiationCsvButton,
  ItemCsvButton,
  Loading,
  SearchItemForm,
  SearchItemIsRentButton,
  SearchItemResultList,
} from '../../components';

const Home: FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keywords = searchParams.get('keywords') || '';
  // get search result
  const result: SearchItemsResponse | ErrorResponse | Pending = useFetchSearchItemWithUseEffect(keywords);
  // filter
  const [isRent, setIsRent] = useState<boolean>(false);
  return (
    <>
      <SearchItemForm keywords={keywords} />
      <br />
      <SearchItemIsRentButton setIsRent={setIsRent} />
      <h3>{isRent ? <div>true</div> : <div>false</div>}</h3>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to="/generate">Generate</Link>
      <br />
      <Link to="/trash">Trash History</Link>
      <br />
      <Link to="/connector">Connector</Link>
      <br />
      <Link to="/color">Color</Link>
      <br />
      <DepreiationCsvButton />
      <ItemCsvButton />
      {keywords === '' ? (
        // 検索欄が空
        <></>
      ) : result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <SearchItemResultList result={result} isRent={isRent} />
      )}
    </>
  );
};

export default Home;
