import { describe, expect, test } from 'vitest';
import { registerItemSchema, RegisterItemSchemaType } from './registerItem';
import { LocalFileListBuilder } from '@mock-filelist/filelist';
import { createLargeImageFileList } from './test_utils/createLargeImageSample';

describe('registerItem.testのバリデーション', () => {
  test.concurrent('有効な入力: 正常に物品登録ができた場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: nameが空', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: '',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 物品IDが4文字以外である', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '000BB',
      parent_visible_id: '000AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 物品IDに小文字の英字が含まれている', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00bb',
      parent_visible_id: '00aa',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 購入年度が2000年以前になっている', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 1990,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 購入金額が0円以上でない形式になっている', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: -100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 耐久年数が1年以上になっていない', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 0,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 添付画像がない場合', () => {
    let filelist: FileList = new LocalFileListBuilder().build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 添付画像が2枚の場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 添付画像の容量が100MBを超える場合', async () => {
    const LargeImageFileList = await createLargeImageFileList(120); //120MB
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: LargeImageFileList,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('有効な入力: 添付画像の拡張子がjpegの場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.jpg', name: 'sample.jpg', mimeType: 'image/jpeg' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: 添付画像の拡張子がsvgの場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.svg', name: 'sample.svg', mimeType: 'image/svg+xml' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 添付画像の拡張子がtxtの場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.txt', name: 'sample.txt', mimeType: 'text/plain' })
      .build();
    const validInput: RegisterItemSchemaType = {
      name: 'テストアイテム',
      visible_id: '00BB',
      parent_visible_id: '00AA',
      product_number: 'TEST-0000',
      description: 'これはテストアイテムです。',
      purchase_year: 2015,
      purchase_price: 100,
      durability: 5,
      is_depreciation: true,
      connector: [{ connector: 'HDMIオス' }, { connector: 'USB-Aオス' }],
      color: [{ color: 'red' }, { color: 'black' }],
      image: filelist,
    };
    const result = registerItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
});
