import { Schema, model } from 'mongoose';
import {
  TAcademicDepartment,
  TAcademicDepartmentModel,
} from './academicDepartmet.interface';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';
// import AppError from '../../errors/appError';
// import httpStatus from 'http-status';

const academicDepartmentSchema = new Schema<
  TAcademicDepartment,
  TAcademicDepartmentModel
>(
  {
    name: {
      type: String,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

academicDepartmentSchema.statics.isDepartmentExist = async function (name) {
  const result = await this.findOne({ name });
  if (result)
    throw new AppError(httpStatus.CREATED, `${name} is already exists!`);
};

export const academicDepartmentSchemaModel = model<
  TAcademicDepartment,
  TAcademicDepartmentModel
>('AcademicDepartment', academicDepartmentSchema);
