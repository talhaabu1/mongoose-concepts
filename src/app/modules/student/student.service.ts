import { StudentModel } from './student.model';

//? create new student function ⤴

//? get all students function ⤵
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
//? get all students function ⤴

//? get single student function ⤵
const getSingleStudentFromDB = async (id: string) => {
  // const result = await StudentModel.findOne({ id });
  const pipline = [{ $match: { id: id } }];
  const result = await StudentModel.aggregate(pipline);

  return result;
};
//? get single student function ⤴

//? delete single student function ⤵
const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};
//? delete single student function ⤴

export const studentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
