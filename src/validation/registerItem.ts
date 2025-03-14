import { z } from 'zod';

//時間の取得
const today = new Date();
//NaNをnumberとして扱えるようにする
const NaNSchema: z.ZodSchema<number> = z.any().refine(Number.isNaN);
//許容するMIMEタイプ
const ACCEPT_MIME_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
//許容するファイルサイズ
const MAX_SIZE = 1024 * 1024 * 100; //100MB

const registerItemSchema = z.object({
  name: z.string().min(1, { message: '名前は、1文字以上入れてください。' }),
  visible_id: z
    .string()
    .min(4, { message: '物品IDは、4文字の英数字です。' })
    .max(4, { message: '物品IDは、4文字の英数字です。' })
    .regex(/^[A-Z0-9]+$/, {
      message: '半角英数字（英字は大文字）で入力してください',
    }),
  parent_visible_id: z
    .string()
    .min(4, { message: '物品IDは、4文字の英数字です。' })
    .max(4, { message: '物品IDは、4文字の英数字です。' })
    .regex(/^[A-Z0-9]+$/, {
      message: '半角英数字（英字は大文字）で入力してください',
    }),
  product_number: z.string().default(''),
  description: z.string().default(''),
  purchase_year: z
    .number()
    .or(NaNSchema)
    .refine((year) => Number.isNaN(year) || (year >= 2000 && year <= today.getFullYear() && Number.isInteger(year)), {
      message: `西暦 2000年から、西暦 ${today.getFullYear()}年までの西暦の数字4桁を入力してください。`,
    })
    .nullable(),
  purchase_price: z
    .number()
    .or(NaNSchema)
    .refine((price) => Number.isNaN(price) || (price >= 0 && Number.isInteger(price)), {
      message: `0円以上の金額を入力してください。`,
    })
    .nullable(),
  durability: z
    .number()
    .or(NaNSchema)
    .refine((price) => Number.isNaN(price) || (price >= 1 && Number.isInteger(price)), {
      message: `1年以上の年数を入力してください。`,
    })
    .nullable(),
  is_depreciation: z.boolean(),
  connector: z.custom<{ connector: string }[]>(),
  color: z.custom<{ color: string }[]>(),
  image: z
    .custom<FileList>()
    .refine((files) => 0 < files.length, {
      message: '画像ファイルの添付は必須です',
    })
    .refine((files) => files.length < 2, {
      message: '添付できる画像ファイルは1枚だけです',
    })
    .refine((files) => Array.from(files).every((file) => file.size < MAX_SIZE), {
      message: '添付できる画像ファイルは100MBまでです',
    })
    .refine((files) => Array.from(files).every((file) => ACCEPT_MIME_TYPES.includes(file.type)), {
      message: '添付できる画像ファイルは jpeg、jpg、png、webp です',
    }),
});

export { registerItemSchema };
export type RegisterItemSchemaType = z.infer<typeof registerItemSchema>;
