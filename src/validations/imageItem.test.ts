import { describe, expect, test } from 'vitest';
import { imageItemSchema, ImageItemSchemaType } from './imageItem';
import { LocalFileListBuilder } from '@mock-filelist/filelist';
import { createLargeImageFileList } from '../../test_assets/createLargeImageSample';

describe('imageItemSchemaのバリデーション', () => {
  test.concurrent('有効な入力: 添付画像が1枚の場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: ImageItemSchemaType = {
      image: filelist,
    };
    const result = imageItemSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: 添付画像がない場合', () => {
    let filelist: FileList = new LocalFileListBuilder().build();
    const validInput: ImageItemSchemaType = {
      image: filelist,
    };
    const result = imageItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 添付画像が2枚の場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: ImageItemSchemaType = {
      image: filelist,
    };
    const result = imageItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 添付画像の容量が100MBを超える場合', async () => {
    const LargeImageFileList = await createLargeImageFileList(120); //120MB
    const validInput: ImageItemSchemaType = {
      image: LargeImageFileList,
    };
    const result = imageItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('有効な入力: 添付画像の拡張子がjpegの場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.jpg', name: 'sample.jpg', mimeType: 'image/jpeg' })
      .build();
    const validInput: ImageItemSchemaType = {
      image: filelist,
    };
    const result = imageItemSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
  test.concurrent('無効な入力: 添付画像の拡張子がsvgの場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.svg', name: 'sample.svg', mimeType: 'image/svg+xml' })
      .build();
    const validInput: ImageItemSchemaType = {
      image: filelist,
    };
    const result = imageItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
  test.concurrent('無効な入力: 添付ファイルの拡張子がtxtの場合', () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.txt', name: 'sample.txt', mimeType: 'text/plain' })
      .build();
    const validInput: ImageItemSchemaType = {
      image: filelist,
    };
    const result = imageItemSchema.safeParse(validInput);
    expect(result.success).toBe(false);
  });
});
