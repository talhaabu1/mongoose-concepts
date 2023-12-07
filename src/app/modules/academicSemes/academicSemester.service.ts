import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TAcademicSemseter } from './academicSemes.interface';
import { acdemicSemesterSchemaModel } from './academicSemes.model';
import { academicSemesterNameCodeMapper } from './acdemicSemester.const';

const createAcademicSemesterIntoDB = async (data: TAcademicSemseter) => {
  if (academicSemesterNameCodeMapper[data.name] !== data.code)
    throw new AppError(httpStatus.NOT_FOUND, 'NAME OF CODE NOT MATCH');
  const result = await acdemicSemesterSchemaModel.create(data);
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await acdemicSemesterSchemaModel.find({});
  return result;
};

const getSingleAcademicSemesterFromDB = async (_id: string) => {
  const result = await acdemicSemesterSchemaModel.findOne({ _id });
  return result;
};
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemseter>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(httpStatus.ALREADY_REPORTED, 'Invalid Semester Code');
  }

  const result = await acdemicSemesterSchemaModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicSemseterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
