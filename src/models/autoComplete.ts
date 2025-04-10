import { ErrorResponse } from 'react-router-dom';
import { AllColorsResponse } from './allColorsResponse';
import { AllConnectorsResponse } from './allConnectorsResponse';

export type AutoComplete = {
  connectors: AllConnectorsResponse | ErrorResponse;
  colors: AllColorsResponse | ErrorResponse;
};
