import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import {
  AllConnectors,
  Loading,
  RegisterConnector,
  SearchConnectorForm,
  SearchConnectorResult,
  Title,
} from '../../components';
import { useFetchSearchConnector } from '../../hooks/useFetchSearchConnector';
import { SearchConnectorsResponse } from '../../models/searchConnectorResponse';
import { useFetchAllConnectors } from '../../hooks/useFetchAllConnectors';
import { AllConnectorsResponse } from '../../models/allConnectorsResponse';

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
      <Title title="端子名管理" />
      <RegisterConnector />
      <SearchConnectorForm keywords={keywords} />
      {keywords === '' ? (
        // 検索欄が空
        <AllConnectors result={initialResult} />
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
