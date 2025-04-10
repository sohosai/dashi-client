import { SelectConnectorResponse, ConnectorResponse } from './connectorResponse';

export type AllConnectorsResponse = {
  all_connectors: ConnectorResponse[];
};

export type AllSelectConnectorResponse = {
  all_connectors: SelectConnectorResponse[];
};
