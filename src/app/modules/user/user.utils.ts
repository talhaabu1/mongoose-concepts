import { TAcademicSemseter } from '../academicSemes/academicSemes.interface';
import { userSchemaModel } from './user.model';

const findLastStudentID = async () => {
  const lastStudent = await userSchemaModel
    .findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

// year semester code 4 digit number
export const generatedStudentId = async (payload: TAcademicSemseter) => {
  //   first time 0000
  let currentID = (0).toString();

  const lastStudentID = await findLastStudentID();
  const lastStudentSemesterCode = lastStudentID?.substring(4, 6);
  const lastStudentYear = lastStudentID?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;
  if (
    lastStudentID &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentID = lastStudentID.substring(6);
  }

  let incrementID = (Number(currentID) + 1).toString().padStart(4, '0');
  incrementID = `${payload?.year}${payload?.code}${incrementID}`;
  return incrementID;
};
