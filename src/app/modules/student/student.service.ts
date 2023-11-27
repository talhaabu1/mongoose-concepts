import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

//? create new student function ⤵
const createStudentIntoDB = async (studentData: TStudent) => {
  //? built in static method

  if (await StudentModel.isUserExits(studentData.id)) {
    throw new Error(`Student is already exists`);
  }

  const result = await StudentModel.create(studentData);
  //? instance mehtod
  // const student = new StudentModel(studentData); // create an instance
  // if (await student.isUserExits(studentData.id)) {
  //   throw new Error(`Student is already exists`);
  // }
  // return await student.save();

  //?
  return result;
};
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
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
