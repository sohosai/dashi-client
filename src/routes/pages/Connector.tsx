import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import {
  AllConnectorsResult,
  Loading,
  RegisterConnector,
  SearchConnectorForm,
  SearchConnectorResult,
} from '../../components';
import { useFetchSearchConnector } from '../../hooks/useFetchSearchConnector';
import { SearchConnectorsResponse } from '../../model/searchConnectorResponse';
import { useFetchAllConnectors } from '../../hooks/useFetchAllConnectors';
import { AllConnectorsResponse } from '../../model/allConnectorsResponse';

const Connector: FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keywords = searchParams.get('keywords') || '';
  // get all connectors result
  const initialResult: AllConnectorsResponse | ErrorResponse | Pending = useFetchAllConnectors();
  // get search result
  const result: SearchConnectorsResponse | ErrorResponse | Pending = useFetchSearchConnector(keywords);
  return (
    <>
      <SearchConnectorForm keywords={keywords} />
      <br />
      <RegisterConnector />
      {keywords === '' ? (
        // 検索欄が空
        <AllConnectorsResult result={initialResult} />
      ) : result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <SearchConnectorResult result={result} />
      )}
    </>
  );
};

export default Connector;
