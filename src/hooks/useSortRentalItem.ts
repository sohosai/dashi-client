import { AllRentalItemsResponse, RentalItemResponse } from '../model/allRentalItemsResponse';

//compareFunction
const compare = (a: RentalItemResponse, b: RentalItemResponse) => {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
};

export const useSortRentalItem = (rental_items_response: AllRentalItemsResponse): AllRentalItemsResponse => {
  rental_items_response.rental_items.sort(compare);
  const result: AllRentalItemsResponse = {
    rental_items: rental_items_response.rental_items,
  };
  return result;
};
