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
const deleteStudent = catchAsync(async (req, res) => {
  const result = await studentServices.deleteStudentFromDB(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});
// student get single controller ⤴

// student delete single controller ⤵
const updateStudent = catchAsync(async (req, res) => {
  const { student } = req.body;
  const result = await studentServices.updateStudentFromDB(
    req.params.id,
    student,
  );
  res.status(200).json({
    success: true,
    message: 'Updated successfully',
    data: result,
  });
});
// student get single controller ⤴

export const studentControolers = {
  getAllStudents,
  getSingleStudents,
  deleteStudent,
  updateStudent,
};
