import { Status } from './status';

export type ConnectorResponse = {
  id: number;
  name: string;
  status: Status;
};

export type SelectConnectorResponse = {
  id: number;
  label: string;
  value: string;
  status: Status;
};
