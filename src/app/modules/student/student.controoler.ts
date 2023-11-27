import { Request, Response } from 'express';
import { studentServices } from './student.service';

// student  post controoler ⤵
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    // controller service call function ⤵
    const result = await studentServices.createStudentIntoDB(student);

    // controller service call function ⤴
    // send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};
// student  post controoler ⤴

// student get controller ⤵
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student get successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(200).json({
      success: true,
      message: error.message,
    });
  }
};
// student get controller ⤴

// student get single controller ⤵
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getSingleStudentFromDB(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Student get one successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// student get single controller ⤴

// student delete single controller ⤵
const deleteStudent = async (req: Request, res: Response) => {
  try {
    await studentServices.deleteStudentFromDB(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
    });
  } catch (error) {
    console.log(error);
  }
};
// student get single controller ⤴

export const studentControolers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
  deleteStudent,
};
