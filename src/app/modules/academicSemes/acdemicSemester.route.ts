import { Router } from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import { validateRequest } from '../../middlewares/validRequest';
import { AcdemiSemValSchema } from './acdemicSemester.validation';

const router = Router();

// will call controller function
// router.get('/', studentControolers.getAllStudents);
// router.get('/:id', studentControolers.getSingleStudents);
// router.delete('/:id', studentControolers.deleteStudent);
router.post(
  '/create-acad-semes',
  validateRequest(AcdemiSemValSchema.createAcdemiSemValSchema),
  academicSemesterControllers.createAcademicSemester,
);

router.get(
  '/:semesterId',
  academicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(AcdemiSemValSchema.updateAcdemiSemValSchema),
  academicSemesterControllers.updateAcademicSemester,
);

router.get('/', academicSemesterControllers.getAllAcademicSemesters);

export const acadSemesRoutes = router;
