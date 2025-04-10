import { Status } from './status';

export type ColorResponse = {
  id: number;
  name: string;
  hex_color_code: string;
  status: Status;
};

export type SelectColorResponse = {
  id: number;
  label: string;
  value: string;
  hex_color_code: string;
  status: Status;
};
