export interface Guardian {
  fatherName: string;
  motherName: string;
  fatherContactName: string;
  motherContactName: string;
}

export interface StudentName {
  firstName: string;
  lastName: string;
}

export interface Student {
  id: string;
  name: StudentName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNO: string;
  emergencyContactNO: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress?: string;
  monthlySalary: number;
  guardian: Guardian;
  interested?: boolean;
  profileImg?: string;
  isActive: 'active' | 'block';
}
