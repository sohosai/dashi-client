import { describe, expect, test } from 'vitest';
import { timestampConverter } from './timestamp';

describe('timestampを表示する形式に変換', () => {
  test.concurrent('基本', () => {
    const result: string = timestampConverter('2025-01-01 11:08:01.123456789');
    expect(result).toBe('2025年 1月 1日 20時8分');
  });
  test.concurrent('日を跨ぐ パターン１', () => {
    const result: string = timestampConverter('2025-01-01 15:08:01.123456789');
    expect(result).toBe('2025年 1月 2日 0時8分');
  });
  test.concurrent('日を跨ぐ パターン２', () => {
    const result: string = timestampConverter('2025-01-09 15:08:01.123456789');
    expect(result).toBe('2025年 1月 10日 0時8分');
  });
  test.concurrent('日を跨ぐ パターン３', () => {
    const result: string = timestampConverter('2025-01-10 15:08:01.123456789');
    expect(result).toBe('2025年 1月 11日 0時8分');
  });
  test.concurrent('月を跨ぐ パターン１', () => {
    const result: string = timestampConverter('2025-01-31 15:08:01.123456789');
    expect(result).toBe('2025年 2月 1日 0時8分');
  });
  test.concurrent('月を跨ぐ パターン２', () => {
    const result: string = timestampConverter('2025-09-30 15:08:01.123456789');
    expect(result).toBe('2025年 10月 1日 0時8分');
  });
  test.concurrent('年を跨ぐ', () => {
    const result: string = timestampConverter('2025-12-31 15:08:01.123456789');
    expect(result).toBe('2026年 1月 1日 0時8分');
  });
});
