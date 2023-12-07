import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/appError';
import { acdemicSemesterSchemaModel } from '../academicSemes/academicSemes.model';
// import { TAcademicSemseter } from '../academicSemes/academicSemes.interface';
// import { acdemicSemesterSchemaModel } from '../academicSemes/academicSemes.model';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { userSchemaModel } from './user.model';
import { generatedStudentId } from './user.utils';
import mongoose from 'mongoose';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  //? oassword is nto give , use defalt password
  userData.password = password || (config.default_pass as string);
  userData.role = 'student';

  // set manually generated it

  // find academic semester info

  const admissionSemester = await acdemicSemesterSchemaModel.findById(
    studentData.admissionSemester,
  );

  if (!admissionSemester) {
    throw new AppError(httpStatus.BAD_GATEWAY, 'Invalid admission semester');
  }

  const session = await mongoose.startSession();

  try {
    // start session
    session.startTransaction();
    userData.id = await generatedStudentId(admissionSemester);

    //? create a user (Transaction-1)
    const newUser = await userSchemaModel.create([userData], { session });

    // create a studne
    if (!newUser.length)
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    //
    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id;
    // reference _id
    //? create a user (Transaction-2)

    const newStudent = await StudentModel.create([studentData], { session });

    if (!newStudent.length)
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');

    await session.commitTransaction();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, err as string);
  } finally {
    await session.endSession();
  }
};

export const UserService = {
  createStudentIntoDB,
};
