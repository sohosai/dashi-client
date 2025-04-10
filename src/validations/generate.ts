import { z } from 'zod';
import { Record } from '../models/record';

const generateSchema = z.object({
  quantity: z.coerce.number().refine((quantity) => quantity <= 49 && quantity >= 1 && Number.isInteger(quantity), {
    message: `1個から49個までの間で生成する数を指定してください。`,
  }),
  record: z.custom<Record>(),
});

export { generateSchema };
export type GenerateSchemaType = z.infer<typeof generateSchema>;
