import { Router } from 'express';
import { studentControolers } from './student.controoler';
import { validateRequest } from '../../middlewares/validRequest';
import { createStudentUpdateVadSchema } from './student.validation';

const router = Router();

// will call controller function
router.get('/', studentControolers.getAllStudents);
router.get('/:id', studentControolers.getSingleStudents);
router.patch(
  '/:id',
  validateRequest(createStudentUpdateVadSchema),
  studentControolers.updateStudent,
);
router.delete('/:id', studentControolers.deleteStudent);

export const studentRoutes = router;
