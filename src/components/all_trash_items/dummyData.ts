import { AllTrashItemsResponse } from '../../models/allTrashItemResponse';

export const allTrashItemsResponseData: AllTrashItemsResponse = {
  trash_items: [
    {
      id: 1,
      item_id: 1,
      visible_id: '0000',
      name: '佃煮大学',
      product_number: 'A0001',
      description: '佃煮大学は、あります！(大嘘)',
      purchase_year: 2025,
      purchase_price: 10000,
      durability: 100,
      is_depreciation: false,
      connector: ['HDMIオス', 'HDMIオス'],
      is_rent: false,
      color: 'red',
      created_at: '2025-01-01 11:08:46.748730482',
      updated_at: '2025-01-01 11:08:46.748730482',
    },
    {
      id: 2,
      item_id: 2,
      visible_id: '0001',
      name: 'そぽたん煮',
      product_number: '',
      description: '雑煮と似た味がするらしい',
      purchase_year: null,
      purchase_price: null,
      durability: null,
      is_depreciation: true,
      connector: [],
      is_rent: true,
      color: '',
      created_at: '2025-01-01 11:08:46.748730482',
      updated_at: '2025-01-01 11:08:46.748730482',
    },
  ],
};
