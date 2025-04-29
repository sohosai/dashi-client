import { describe, expect, test } from 'vitest';
import { searchConnectorSchema, SearchConnectorSchemaType } from './searchConnector';

describe('searchConnectorSchemaのバリデーション', () => {
  test.concurrent('有効な入力： keywordsが空でない', () => {
    const validInput: SearchConnectorSchemaType = {
      keywords: 'Hello, World!',
    };
    const result = searchConnectorSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: keywordsが空', () => {
    const validInput: SearchConnectorSchemaType = {
      keywords: '',
    };
    const result = searchConnectorSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
});
