import { Student } from './student.interface';
import { StudentModel } from './student.model';

//? create new student function ⤵
const createStudentIntoDB = async (student: Student) => {
  try {
    const result = await StudentModel.create(student);
    return result;
  } catch (error) {
    console.log(error);
  }
};
//? create new student function ⤴

//? get all students function ⤵
const getAllStudentsFromDB = async () => {
  try {
    const result = await StudentModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};
//? get all students function ⤴

//? get single student function ⤵
const getSingleStudentFromDB = async (id: string) => {
  try {
    const result = await StudentModel.findOne({ id });
    return result;
  } catch (error) {
    console.log(error);
  }
};
//? get single student function ⤴

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
