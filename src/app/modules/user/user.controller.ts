import { RequestHandler } from 'express';
import { UserService } from './user.service';
import userSchemaZod from './user.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
// user  post controoler ⤵
const createStudent: RequestHandler = catchAsync(async (req, res) => {
  await userSchemaZod.parse(req.body);
  const { password, student: studentData } = req.body;
  // controller service call function ⤵
  const result = await UserService.createStudentIntoDB(password, studentData);
  // controller service call function ⤴
  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});
// user  post controoler ⤴

export const userControllers = {
  createStudent,
};
