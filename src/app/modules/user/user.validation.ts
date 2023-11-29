import { z } from 'zod';

const userSchemaZod = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .min(8, { message: 'Must be 8 or more characters long' })
    .max(10, { message: 'Must be 5 or fewer characters long' })
    .optional(),
});

export default userSchemaZod;
