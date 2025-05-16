import { describe, expect, test } from 'vitest';
import { updateItemSchema, UpdateItemSchemaType } from './updateItem';

describe('updateItem.testのバリデーション', () => {
  test.concurrent('有効な入力: 正常に物品情報の更新ができた場合', () => {
    const validInput: UpdateItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
    };
    const result = updateItemSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: nameが空', () => {
    const validInput: UpdateItemSchemaType = {
      name: '',
      visible_id: '00BB',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
    };
    const result = updateItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 物品IDが4文字以外である', () => {
    const validInput: UpdateItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '000BB',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
    };
    const result = updateItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 物品IDに小文字の英字が含まれている', () => {
    const validInput: UpdateItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00bb',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
    };
    const result = updateItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 購入年度が2000年以前になっている', () => {
    const validInput: UpdateItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 1990,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
    };
    const result = updateItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 購入金額が0円以上でない形式になっている', () => {
    const validInput: UpdateItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: -100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
    };
    const result = updateItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 耐久年数が1年以上になっていない', () => {
    const validInput: UpdateItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 0,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
    };
    const result = updateItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
});
