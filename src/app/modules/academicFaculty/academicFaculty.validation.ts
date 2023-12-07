import { z } from 'zod';

export const academicFacultyVadSch = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'AcademicFaculty must be a string' }),
  }),
});

export const academicFacultyUpdateVadSch = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'AcademicFaculty must be a string' }),
  }),
});
