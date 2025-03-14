export type TrashItemResponse = {
  id: number;
  item_id: number;
  visible_id: string;
  name: string;
  product_number: string;
  description: string;
  purchase_year: number | null;
  purchase_price: number | null;
  durability: number | null;
  is_depreciation: boolean;
  connector: string[];
  is_rent: boolean;
  color: string;
  created_at: string;
  updated_at: string;
};

export type TrashItemsResponse = {
  trash_items: TrashItemResponse[];
};
