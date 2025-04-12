import { describe, expect, test } from 'vitest';
import { scheduledReplaceAtConverter } from './scheduled_replace_at';

describe('scheduled_replace_atを表示する形式に変換', () => {
  test.concurrent('月: １桁、日: １桁', () => {
    const result: string = scheduledReplaceAtConverter('2025-01-01 00:00:00 +00:00');
    expect(result).toBe('2025年 1月 1日');
  });
  test.concurrent('月: １桁、日: ２桁', () => {
    const result: string = scheduledReplaceAtConverter('2025-01-10 00:00:00 +00:00');
    expect(result).toBe('2025年 1月 10日');
  });
  test.concurrent('月: ２桁、日: １桁', () => {
    const result: string = scheduledReplaceAtConverter('2025-10-01 00:00:00 +00:00');
    expect(result).toBe('2025年 10月 1日');
  });
  test.concurrent('月: ２桁、日: ２桁', () => {
    const result: string = scheduledReplaceAtConverter('2025-10-10 00:00:00 +00:00');
    expect(result).toBe('2025年 10月 10日');
  });
});
