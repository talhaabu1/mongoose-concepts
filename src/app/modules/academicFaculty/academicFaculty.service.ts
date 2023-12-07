import { TAcademicFaculty } from './academicFaculty.interface';
import { academicFacultySchemaModel } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await academicFacultySchemaModel.create(payload);
  return result;
};

const getAllAcademicFacultiesFromDB = async () => {
  const result = await academicFacultySchemaModel.find({});
  return result;
};

const getSingleAcademicFacultyFromDB = async (_id: string) => {
  const result = await academicFacultySchemaModel.findOne({ _id });
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: TAcademicFaculty,
) => {
  const result = await academicFacultySchemaModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
