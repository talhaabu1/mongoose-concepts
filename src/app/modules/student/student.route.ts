import { Router } from 'express';
import { studentControolers } from './student.controoler';

const router = Router();

// will call controller function
router.get('/', studentControolers.getAllStudents);
router.get('/:id', studentControolers.getSingleStudents);
router.delete('/:id', studentControolers.deleteStudent);
router.post('/create-student', studentControolers.createStudent);

export const studentRoutes = router;
