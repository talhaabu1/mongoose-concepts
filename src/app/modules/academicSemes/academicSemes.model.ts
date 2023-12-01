import { Schema, model } from 'mongoose';
import { TAcademicSemseter } from './academicSemes.interface';
import { AcdemiSemCode, AcdemiSemName, months } from './acdemicSemester.const';

const acdemicSemesterSchema = new Schema<TAcademicSemseter>(
  {
    naem: { type: String, enum: AcdemiSemName, required: true },
    year: { type: Date, required: true },
    code: { type: String, enum: AcdemiSemCode, required: true },
    startMonth: { type: String, enum: months, required: true },
    endMonth: { type: String, enum: months, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const acdemicSemesterSchemaModel = model(
  'AcdemicSemester',
  acdemicSemesterSchema,
);
