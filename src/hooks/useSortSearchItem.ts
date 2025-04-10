import { SearchItemResponse, SearchItemsResponse } from '../models/searchItemResponse';

//compareFunction
const compare = (a: SearchItemResponse, b: SearchItemResponse) => {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
};

export const useSortSearchItem = (search_items_response: SearchItemsResponse): SearchItemsResponse => {
  search_items_response.search_items.sort(compare);
  const result: SearchItemsResponse = {
    search_items: search_items_response.search_items,
  };
  return result;
};
