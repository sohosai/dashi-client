import { z } from 'zod';

const registerConnectorSchema = z.object({
  name: z
    .string()
    .min(1, { message: '接続端子名は、1文字以上入れてください。' })
    .refine((name) => !name.includes('^'), {
      message: '^ は使用できません。',
    }),
});

export { registerConnectorSchema };
export type RegisterConnectorSchemaType = z.infer<typeof registerConnectorSchema>;
