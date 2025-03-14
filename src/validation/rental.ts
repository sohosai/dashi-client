import { z } from 'zod';

const rentalSchema = z.object({
  recipient: z.string().min(1, { message: '借用者名義は、必ず入れてください。' }),
  rental_description: z.string().default(''),
  scheduled_replace_at: z.string().default(''),
});

export { rentalSchema };
export type RentalSchemaType = z.infer<typeof rentalSchema>;
