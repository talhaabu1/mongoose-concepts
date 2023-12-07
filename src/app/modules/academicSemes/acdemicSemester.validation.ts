import { z } from 'zod';
import { AcdemiSemCode, AcdemiSemName, months } from './acdemicSemester.const';

const createAcdemiSemValSchema = z.object({
  body: z.object({
    name: z.enum([...AcdemiSemName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcdemiSemCode] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

const updateAcdemiSemValSchema = z.object({
  body: z.object({
    name: z.enum([...AcdemiSemName] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...AcdemiSemCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...months] as [string, ...string[]]).optional(),
  }),
});

export const AcdemiSemValSchema = {
  createAcdemiSemValSchema,
  updateAcdemiSemValSchema,
};
