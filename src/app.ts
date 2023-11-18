import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//? user parsers call ⤵
app.use(express.json());
app.use(cors());
//? user parsers call ⤴

//? application routes call ⤵
app.use('/students', studentRoutes);
//? application routes call ⤴

app.get('/', (req: Request, res: Response) => {
  res.send('WELCOME PAGE 🧮');
});

export default app;
