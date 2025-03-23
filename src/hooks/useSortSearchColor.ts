import { ColorResponse } from '../model/colorResponse';
import { SearchColorsResponse } from '../model/searchColorResponse';

//compareFunction
const compare = (a: ColorResponse, b: ColorResponse) => {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
};

export const useSortSearchColor = (colors_response: SearchColorsResponse): SearchColorsResponse => {
  colors_response.search_colors.sort(compare);
  const result: SearchColorsResponse = {
    search_colors: colors_response.search_colors,
  };
  return result;
};
