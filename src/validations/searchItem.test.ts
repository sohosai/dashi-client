import { describe, expect, test } from 'vitest';
import { searchItemSchema, SearchItemSchemaType } from './searchItem';

describe('searchItemSchemaのバリデーション', () => {
  test.concurrent('有効な入力: keywordsが空でない', () => {
    const validInput: SearchItemSchemaType = {
      keywords: 'Hello, World!',
    };
    const result = searchItemSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: keywordsが空', () => {
    const validInput: SearchItemSchemaType = {
      keywords: '',
    };
    const result = searchItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
});
