import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import userSchemaZod from './user.validation';

// user  post controoler ⤵
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await userSchemaZod.parse(req.body);
    const { password, student: studentData } = req.body;
    // controller service call function ⤵
    const result = await UserService.createStudentIntoDB(password, studentData);
    // controller service call function ⤴
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// user  post controoler ⤴

export const userControllers = {
  createStudent,
};
