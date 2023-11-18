import { Schema, model } from 'mongoose';
import { Guardian, Student, StudentName } from './student.interface';

const nameSchema = new Schema<StudentName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  fatherContactName: { type: String, required: true },
  motherContactName: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: nameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNO: { type: String, required: true },
  emergencyContactNO: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String },
  monthlySalary: { type: Number, required: true },
  guardian: guardianSchema,
  interested: Boolean,
  profileImg: String,
  isActive: { type: String, enum: ['active', 'block'], required: true },
});

export const StudentModel = model<Student>('User', studentSchema);
