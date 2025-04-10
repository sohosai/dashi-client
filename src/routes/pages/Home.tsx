import { useLocation } from 'react-router-dom';
import { FC, useState } from 'react';
import { SearchItemsResponse } from '../../models/searchItemResponse';
import { useFetchSearchItemWithUseEffect } from '../../hooks/useFetchSearchItemWithUseEffect';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import { Loading, Menu, SearchItemForm, SearchItemIsRentButton, SearchItemResultList } from '../../components';

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
      <Menu />
      <SearchItemForm keywords={keywords} />
      <SearchItemIsRentButton setIsRent={setIsRent} />
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
