import { Router } from 'express';
import { validateRequest } from '../../middlewares/validRequest';
import {
  academicFacultyUpdateVadSch,
  academicFacultyVadSch,
} from './academicFaculty.validation';
import { academicFacultyControllers } from './academicFaculty.controoller';

const router = Router();

router.post(
  '/create-acad-faculty',
  validateRequest(academicFacultyVadSch),
  academicFacultyControllers.createAcademicFucalty,
);

router.get('/:facultyId', academicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validateRequest(academicFacultyUpdateVadSch),
  academicFacultyControllers.updateAcademicFaculty,
);

router.get('/', academicFacultyControllers.getAllAcademicFaculty);

export const acadSemesFacultyRoutes = router;
