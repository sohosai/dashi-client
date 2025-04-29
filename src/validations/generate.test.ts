import { describe, expect, test } from 'vitest';
import { generateSchema, GenerateSchemaType } from './generate';

describe('generateSchemaのバリデーション', () => {
  test.concurrent('有効な入力: recordがQr', () => {
    const validInput: GenerateSchemaType = {
      quantity: 10,
      record: 'Qr',
    };
    const result = generateSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('有効な入力: recordがBarcode', () => {
    const validInput: GenerateSchemaType = {
      quantity: 10,
      record: 'Barcode',
    };
    const result = generateSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('有効な入力: recordがNothing', () => {
    const validInput: GenerateSchemaType = {
      quantity: 10,
      record: 'Nothing',
    };
    const result = generateSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: quantityが足りない', () => {
    const invalidInput: GenerateSchemaType = {
      quantity: 0,
      record: 'Qr',
    };
    const result = generateSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: quantityが負の数', () => {
    const invalidInput: GenerateSchemaType = {
      quantity: -1,
      record: 'Qr',
    };
    const result = generateSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: quantityが多い', () => {
    const invalidInput: GenerateSchemaType = {
      quantity: 50,
      record: 'Qr',
    };
    const result = generateSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: quantityが浮動少数点', () => {
    const invalidInput: GenerateSchemaType = {
      quantity: 10.5,
      record: 'Qr',
    };
    const result = generateSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
});
