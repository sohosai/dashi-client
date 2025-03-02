import { Status } from './status';

export type ColorResponse = {
  id: number;
  name: string;
  hex_color_code: string;
  status: Status;
};
