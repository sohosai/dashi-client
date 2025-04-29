import { describe, expect, test } from 'vitest';
import { searchColorSchema, SearchColorSchemaType } from './searchColor';

describe('searchColorSchemaのバリデーション', () => {
  test.concurrent('有効な入力: keywordsが空でない', () => {
    const validInput: SearchColorSchemaType = {
      keywords: 'Hello, World!',
    };
    const result = searchColorSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: keywordsが空', () => {
    const validInput: SearchColorSchemaType = {
      keywords: '',
    };
    const result = searchColorSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
});
