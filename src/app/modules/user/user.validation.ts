import { z } from 'zod';

const userSchemaZod = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .min(8)
    .max(10)
    .optional(),
});

export default userSchemaZod;
