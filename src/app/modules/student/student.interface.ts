import { Model, Types } from 'mongoose';

export interface TGuardian {
  fatherName: string;
  motherName: string;
  fatherContactName: string;
  motherContactName: string;
}

export interface TStudentName {
  firstName: string;
  lastName: string;
}

export interface TStudent {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TStudentName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNO: string;
  emergencyContactNO: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress?: string;
  monthlySalary: number;
  guardian: TGuardian;
  interested?: boolean;
  profileImg?: string;
  isDeleted: boolean;
}

// for creating static
export interface TStudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExits(id: string): Promise<TStudent | null>;
}

//? for creating instance
// export type TStudentMethods = {
//   isUserExits(id: string): Promise<TStudent | null>;
// };

// export type TStudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   TStudentMethods
// >;
