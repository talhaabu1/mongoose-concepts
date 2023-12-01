import { RequestHandler } from 'express';
import { studentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';

// student get controller ⤵
const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    message: 'Student get successfully',
    data: result,
  });
});
// student get controller ⤴

// student get single controller ⤵
const getSingleStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await studentServices.getSingleStudentFromDB(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Student get one successfully',
    data: result,
  });
});
// student get single controller ⤴

// student delete single controller ⤵
const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  await studentServices.deleteStudentFromDB(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Student is deleted successfully',
  });
});
// student get single controller ⤴

export const studentControolers = {
  getAllStudents,
  getSingleStudents,
  deleteStudent,
};
