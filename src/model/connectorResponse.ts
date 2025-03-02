import { Status } from './status';

export type ConnectorResponse = {
  id: number;
  name: string;
  status: Status;
};
