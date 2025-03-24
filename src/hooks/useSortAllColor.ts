import { AllColorsResponse } from '../model/allColorsResponse';
import { ColorResponse } from '../model/colorResponse';

//compareFunction
const compare = (a: ColorResponse, b: ColorResponse) => {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
};

export const useSortAllColor = (colors_response: AllColorsResponse): AllColorsResponse => {
  colors_response.all_colors.sort(compare);
  const result: AllColorsResponse = {
    all_colors: colors_response.all_colors,
  };
  return result;
};
