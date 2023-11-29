import { Router } from 'express';
import { studentControolers } from './student.controoler';

const router = Router();

// will call controller function
router.get('/', studentControolers.getAllStudents);
router.get('/:id', studentControolers.getSingleStudents);
router.delete('/:id', studentControolers.deleteStudent);

export const studentRoutes = router;
