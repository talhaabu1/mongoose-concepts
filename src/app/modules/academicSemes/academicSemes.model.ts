import { Schema, model } from 'mongoose';
import { TAcademicSemseter } from './academicSemes.interface';
import { AcdemiSemCode, AcdemiSemName, months } from './acdemicSemester.const';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';

const acdemicSemesterSchema = new Schema<TAcademicSemseter>(
  {
    name: { type: String, enum: AcdemiSemName, required: true },
    year: { type: String, required: true },
    code: { type: String, enum: AcdemiSemCode, required: true },
    startMonth: { type: String, enum: months, required: true },
    endMonth: { type: String, enum: months, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

acdemicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await acdemicSemesterSchemaModel.findOne({
    name: this.name,
    year: this.year,
  });

  if (isSemesterExists)
    throw new AppError(httpStatus.NOT_FOUND, 'Semester is already exists');
  next();
});

export const acdemicSemesterSchemaModel = model(
  'AcdemicSemester',
  acdemicSemesterSchema,
);
