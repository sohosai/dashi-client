import { describe, expect, test } from 'vitest';
import { registerConnectorSchema, RegisterConnectorSchemaType } from './registerConnector';

describe('registerConnectorSchemaのバリデーション', () => {
  test.concurrent('有効な入力: nameが空でない', () => {
    const validInput: RegisterConnectorSchemaType = {
      name: 'HDMIオス',
    };
    const result = registerConnectorSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: nameが空', () => {
    const invalidInput: RegisterConnectorSchemaType = {
      name: '',
    };
    const result = registerConnectorSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
});
