import { z } from 'zod';

const nameVadSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(10)
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: 'First name should be capitalized',
      },
    ),
  lastName: z.string(),
});

const guardianVadSchema = z.object({
  fatherName: z.string().min(1),
  motherName: z.string().min(1),
  fatherContactName: z.string().min(1),
  motherContactName: z.string().min(1),
});

export const createStudentVadSchema = z.object({
  body: z.object({
    password: z.string(), // Replace with appropriate type for Schema.Types.ObjectId
    student: z.object({
      name: nameVadSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string(),
      email: z.string().email(),
      contactNO: z.string(),
      emergencyContactNO: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddress: z.string().optional(),
      monthlySalary: z.number(),
      guardian: guardianVadSchema,
      interested: z.boolean(),
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

const nameUpdateVadSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(10)
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: 'First name should be capitalized',
      },
    )
    .optional(),
  lastName: z.string().optional(),
});

const guardianUpdateVadSchema = z.object({
  fatherName: z.string().min(1).optional(),
  motherName: z.string().min(1).optional(),
  fatherContactName: z.string().min(1).optional(),
  motherContactName: z.string().min(1).optional(),
});

export const createStudentUpdateVadSchema = z.object({
  body: z.object({
    student: z.object({
      name: nameUpdateVadSchema.optional(),
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNO: z.string().optional(),
      emergencyContactNO: z.string().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      monthlySalary: z.number().optional(),
      guardian: guardianUpdateVadSchema.optional(),
      interested: z.boolean().optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
    }),
  }),
});
