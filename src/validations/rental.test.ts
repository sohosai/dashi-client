import { describe, expect, test } from 'vitest';
import { rentalSchema, RentalSchemaType } from './rental';

describe('rentalSchemaのバリデーション', () => {
  test.concurrent('有効な入力: 全ての項目が空でない', () => {
    const validInput: RentalSchemaType = {
      recipient: 'そぽたん',
      rental_description: 'そぽたんが借りるそぽ~',
      scheduled_replace_at: '2025-01-01T12:00:00Z',
    };
    const result = rentalSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('有効な入力: scheduled_replace_atが空', () => {
    const validInput: RentalSchemaType = {
      recipient: 'そぽたん',
      rental_description: 'そぽたんが借りるそぽ~',
      scheduled_replace_at: '',
    };
    const result = rentalSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('有効な入力： rental_descriptionが空', () => {
    const validInput: RentalSchemaType = {
      recipient: 'そぽたん',
      rental_description: '',
      scheduled_replace_at: '2025-01-01T12:00:00Z',
    };
    const result = rentalSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: recipientが空 (全ての項目が空)', () => {
    const validInput: RentalSchemaType = {
      recipient: '',
      rental_description: '',
      scheduled_replace_at: '',
    };
    const result = rentalSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
});
