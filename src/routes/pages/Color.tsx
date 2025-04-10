import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import { AllColorsResponse } from '../../models/allColorsResponse';
import { SearchColorsResponse } from '../../models/searchColorResponse';
import SearchColorForm from '../../components/color/search/SearchColorForm';
import RegisterColor from '../../components/color/register/RegisterColor';
import { AllColors, Loading, SearchColorResult, Title } from '../../components';
import { useFetchAllColors } from '../../hooks/useFetchAllColors';
import { useFetchSearchColor } from '../../hooks/useFetchSearchColor';

const Color: FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keywords = searchParams.get('keywords') || '';
  // get all colors result
  const initialResult: AllColorsResponse | ErrorResponse | Pending = useFetchAllColors();
  // get search result
  const result: SearchColorsResponse | ErrorResponse | Pending = useFetchSearchColor(keywords);
  return (
    <>
      <Title title="ケーブル識別色管理" />
      <RegisterColor />
      <SearchColorForm keywords={keywords} />
      {keywords === '' ? (
        // 検索欄が空
        <AllColors result={initialResult} />
      ) : result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <SearchColorResult result={result} />
      )}
    </>
  );
};

export default Color;
