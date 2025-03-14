import { TrashItemResponse, TrashItemsResponse } from '../model/trashItemResponse';

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

export const useSortTrashItem = (trash_items_response: TrashItemsResponse): TrashItemsResponse => {
  trash_items_response.trash_items.sort(compare);
  const result: TrashItemsResponse = {
    trash_items: trash_items_response.trash_items,
  };
  return result;
};
