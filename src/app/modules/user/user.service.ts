import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { userSchemaModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  //? oassword is nto give , use defalt password
  userData.password = password || (config.default_pass as string);
  userData.role = 'student';

  // set manually generated it
  userData.id = '2030100001';
  // create a user

  const newUser = await userSchemaModel.create(userData);

  // create a studne
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference _id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
