import { Model, Types } from 'mongoose';

export interface TAcademicDepartment {
  name: string;
  academicFaculty: Types.ObjectId;
}

export interface TAcademicDepartmentModel extends Model<TAcademicDepartment> {
  isDepartmentExist(
    // eslint-disable-next-line no-unused-vars
    name: string,
  ): void;
}
