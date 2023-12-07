import { userControllers } from './user.controller';
import { validateRequest } from '../../middlewares/validRequest';
import { Router } from 'express';
import { createStudentVadSchema } from '../student/student.validation';

const router: Router = Router();

const endPointsRoutes = [
  {
    path: '/create-student',
    contFun: userControllers.createStudent,
    method: 'post',
    middl: validateRequest(createStudentVadSchema),
  },
];

// will call controller function
endPointsRoutes.forEach((item) => {
  const routeMethod = item.method.toLowerCase();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (router as any)[routeMethod](item.path, item.middl, item.contFun);
});
// router.post('/create-user', userControllers.createStudent);

export const userRoutes = router;
