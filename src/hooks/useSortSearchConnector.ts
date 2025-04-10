import { ConnectorResponse } from '../models/connectorResponse';
import { SearchConnectorsResponse } from '../models/searchConnectorResponse';

//compareFunction
const compare = (a: ConnectorResponse, b: ConnectorResponse) => {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
};

export const useSortSearchConnector = (connectors_response: SearchConnectorsResponse): SearchConnectorsResponse => {
  connectors_response.search_connectors.sort(compare);
  const result: SearchConnectorsResponse = {
    search_connectors: connectors_response.search_connectors,
  };
  return result;
};
