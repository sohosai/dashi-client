import { ItemCsv, ItemCsvList } from '../models/itemCsv';
import { ItemCsvItems, ItemCsvResponse } from '../models/itemCsvResponse';

export const useItemCsvConverter = (itemCsvResponse: ItemCsvResponse): ItemCsvList => {
  const items: ItemCsv[] = itemCsvResponse.items.map((item: ItemCsvItems) => {
    return {
      name: item.name,
      product_number: item.product_number,
      description: item.description,
      place: '仮で埋めている',
      quantity: 1,
      usage: '',
      duration: '当日',
      required_quantity: 1,
      note: '',
    };
  });
  return { items };
};
