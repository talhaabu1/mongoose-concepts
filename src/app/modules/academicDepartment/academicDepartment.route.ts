import { Router } from 'express';
import { validateRequest } from '../../middlewares/validRequest';
import {
  academicDepartmentUpdateVadSch,
  academicDepartmentVadSch,
  // academicDepartmentVadSch,
} from './academicDepartment.validation';
import { academicDepartmentControllers } from './academicDepartment.controoller';

const router = Router();

router.post(
  '/create-acad-department',
  validateRequest(academicDepartmentVadSch),
  academicDepartmentControllers.createAcademicDepartment,
);

router.get(
  '/:departmentId',
  academicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(academicDepartmentUpdateVadSch),
  academicDepartmentControllers.updateAcademicDepartment,
);

router.get('/', academicDepartmentControllers.getAllAcademicDepartment);

export const academicDepartmentRoutes = router;
