import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import { AllColorsResponse } from '../../model/allColorsResponse';
import { SearchColorsResponse } from '../../model/searchColorResponse';
import SearchColorForm from '../../components/color/search/SearchColorForm';
import RegisterColor from '../../components/color/register/RegisterColor';
import { AllColorsResult, Loading, SearchColorResult } from '../../components';
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
      <SearchColorForm keywords={keywords} />
      <br />
      <RegisterColor />
      {keywords === '' ? (
        // 検索欄が空
        <AllColorsResult result={initialResult} />
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
