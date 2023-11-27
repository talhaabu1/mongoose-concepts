import { Request, Response } from 'express';
import { UserService } from './user.service';

// user  post controoler ⤵
const createUser = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    // controller service call function ⤵
    const result = await UserService.createUserIntoDB(student);
    // controller service call function ⤴
    // send response
    res.status(200).json({
      success: true,
      message: ' created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};
// user  post controoler ⤴

export const userControllers = {
  createUser,
};
