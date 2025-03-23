import { AllConnectorsResponse } from '../model/allConnectorsResponse';
import { ConnectorResponse } from '../model/connectorResponse';

//compareFunction
const compare = (a: ConnectorResponse, b: ConnectorResponse) => {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
};

export const useSortAllConnector = (connectors_response: AllConnectorsResponse): AllConnectorsResponse => {
  connectors_response.all_connectors.sort(compare);
  const result: AllConnectorsResponse = {
    all_connectors: connectors_response.all_connectors,
  };
  return result;
};
