import { z } from 'zod';

const searchColorSchema = z.object({
  keywords: z.string().min(1, { message: 'キーワードは、1文字以上入れてください。' }),
});

export { searchColorSchema };
export type SearchColorSchemaType = z.infer<typeof searchColorSchema>;
