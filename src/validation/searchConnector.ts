import { z } from 'zod';

const searchConnectorSchema = z.object({
  keywords: z.string().min(1, { message: 'キーワードは、1文字以上入れてください。' }),
});

export { searchConnectorSchema };
export type SearchConnectorSchemaType = z.infer<typeof searchConnectorSchema>;
