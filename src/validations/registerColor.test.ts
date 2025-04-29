import { describe, expect, test } from 'vitest';
import { registerColorSchema, RegisterColorSchemaType } from './registerColor';

describe('RegisterColorSchemaのバリデーション', () => {
  test.concurrent('有効な入力: 白のhex Color Code (#ffffff)', () => {
    const validInput: RegisterColorSchemaType = {
      name: 'white',
      hex_color_code: '#ffffff',
    };
    const result = registerColorSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: nameが空', () => {
    const invalidInput: RegisterColorSchemaType = {
      name: '',
      hex_color_code: '#ffffff',
    };
    const result = registerColorSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: hex_color_codeの先頭に#がない', () => {
    const invalidInput: RegisterColorSchemaType = {
      name: 'red',
      hex_color_code: 'f#fffff',
    };
    const result = registerColorSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: hex_color_codeの長さが短い', () => {
    const invalidInput: RegisterColorSchemaType = {
      name: 'red',
      hex_color_code: '#fff',
    };
    const result = registerColorSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: hex_color_codeの長さが長い', () => {
    const invalidInput: RegisterColorSchemaType = {
      name: 'red',
      hex_color_code: '#fffffff',
    };
    const result = registerColorSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
});
