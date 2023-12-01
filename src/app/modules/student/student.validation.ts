import { z } from 'zod';

const nameSchema = z.object({
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

const guardianSchema = z.object({
  fatherName: z.string().min(1),
  motherName: z.string().min(1),
  fatherContactName: z.string().min(1),
  motherContactName: z.string().min(1),
});

const createStudentSchema = z.object({
  body: z.object({
    password: z.string(), // Replace with appropriate type for Schema.Types.ObjectId
    student: z.object({
      name: nameSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string(),
      email: z.string().email(),
      contactNO: z.string(),
      emergencyContactNO: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddress: z.string().optional(),
      monthlySalary: z.number(),
      guardian: guardianSchema,
      interested: z.boolean(),
      profileImg: z.string().optional(),
    }),
  }),
});

export default createStudentSchema;
