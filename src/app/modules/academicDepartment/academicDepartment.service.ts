import { academicDepartmentSchemaModel } from './academicDepartment.model';
import { TAcademicDepartment } from './academicDepartmet.interface';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  await academicDepartmentSchemaModel.isDepartmentExist(payload.name);
  const result = await academicDepartmentSchemaModel.create(payload);
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await academicDepartmentSchemaModel
    .find({})
    .populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentFromDB = async (_id: string) => {
  const result = await academicDepartmentSchemaModel
    .findOne({ _id })
    .populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: TAcademicDepartment,
) => {
  const result = await academicDepartmentSchemaModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
