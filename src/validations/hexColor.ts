import { z } from 'zod';

const hexColorSchema = z.object({
  hex_color_code: z
    .string()
    .length(7, { message: 'Hex Color Codeの形式に合っていません。' })
    .regex(/^#/, { message: 'Hex Color Codeの形式に合っていません。' }),
});

export { hexColorSchema };
export type HexColorSchemaType = z.infer<typeof hexColorSchema>;
