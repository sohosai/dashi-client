import { DepreiationCsv, DepreiationCsvList } from '../models/depreiationCsv';
import { DepreiationCsvItems, DepreiationCsvResponse } from '../models/depreiationCsvResponse';

export const useDepreiationCsvConverter = (depreiationCsvResponse: DepreiationCsvResponse): DepreiationCsvList => {
  const items: DepreiationCsv[] = depreiationCsvResponse.depreciation_items.map((item: DepreiationCsvItems) => {
    return {
      name: item.name,
      product_number: item.product_number,
      durability: item.durability,
      purchase_year: item.purchase_year,
      purchase_price: item.purchase_price,
    };
  });
  return { items };
};
