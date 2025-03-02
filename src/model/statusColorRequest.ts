import { Status } from './status';

export type StatusColorRequest = {
  id: number;
  hex_color_code: string;
  status: Status;
};
