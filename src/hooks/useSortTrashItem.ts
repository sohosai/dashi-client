import { TrashItemResponse, AllTrashItemsResponse } from '../model/allTrashItemResponse';

//compareFunction
const compare = (a: TrashItemResponse, b: TrashItemResponse) => {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
};

export const useSortTrashItem = (trash_items_response: AllTrashItemsResponse): AllTrashItemsResponse => {
  trash_items_response.trash_items.sort(compare);
  const result: AllTrashItemsResponse = {
    trash_items: trash_items_response.trash_items,
  };
  return result;
};
