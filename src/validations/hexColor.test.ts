import { describe, expect, test } from 'vitest';
import { hexColorSchema, HexColorSchemaType } from './hexColor';

describe('hexColorSchemaのバリデーション', () => {
  test.concurrent('有効な入力: 白のhex Color Code (#ffffff)', () => {
    const validInput: HexColorSchemaType = {
      hex_color_code: '#ffffff',
    };
    const result = hexColorSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: hex_color_codeの先頭に#がない', () => {
    const invalidInput: HexColorSchemaType = {
      hex_color_code: 'f#fffff',
    };
    const result = hexColorSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: hex_color_codeの長さが短い', () => {
    const invalidInput: HexColorSchemaType = {
      hex_color_code: '#fff',
    };
    const result = hexColorSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: hex_color_codeの長さが長い', () => {
    const invalidInput: HexColorSchemaType = {
      hex_color_code: '#fffffff',
    };
    const result = hexColorSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
});
