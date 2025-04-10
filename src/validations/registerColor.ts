import { z } from 'zod';

const registerColorSchema = z.object({
  name: z
    .string()
    .min(1, { message: '接続端子名は、1文字以上入れてください。' })
    .regex(/^[a-z]+$/, {
      message: '半角英字の小文字で入力してください',
    }),
  hex_color_code: z
    .string()
    .length(7, { message: 'Hex Color Codeの形式に合っていません。' })
    .regex(/^#/, { message: 'Hex Color Codeの形式に合っていません。' }),
});

export { registerColorSchema };
export type RegisterColorSchemaType = z.infer<typeof registerColorSchema>;
