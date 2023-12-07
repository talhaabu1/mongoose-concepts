import { z } from 'zod';

export const academicDepartmentVadSch = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'AcademicFaculty must be a string',
      required_error: 'name  is requird',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'AcademicFaculty must be a ID',
      required_error: 'this field is required',
    }),
  }),
});

export const academicDepartmentUpdateVadSch = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'AcademicFaculty must be a string',
        required_error: 'name  is requird',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'AcademicFaculty must be a ID',
        required_error: 'this field is required',
      })
      .optional(),
  }),
});
