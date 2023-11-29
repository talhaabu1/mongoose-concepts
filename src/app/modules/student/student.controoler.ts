import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';

// student get controller ⤵
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student get successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// student get controller ⤴

// student get single controller ⤵
const getSingleStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getSingleStudentFromDB(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Student get one successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// student get single controller ⤴

// student delete single controller ⤵
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await studentServices.deleteStudentFromDB(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
// student get single controller ⤴

export const studentControolers = {
  getAllStudents,
  getSingleStudents,
  deleteStudent,
};
