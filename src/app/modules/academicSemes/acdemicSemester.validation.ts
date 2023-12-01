import { z } from 'zod';

const createAcdemiSemValSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

export default createAcdemiSemValSchema;
