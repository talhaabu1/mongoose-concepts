/* eslint-disable no-unused-vars */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes/inex';
const app: Application = express();

//? user parsers call ⤵
app.use(express.json());
app.use(cors());
//? user parsers call ⤴

//? application routes call ⤵
app.use('/api/v1', router);
//? application routes call ⤴

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const test = async (req: Request, res: Response) => {
  Promise.reject();
};

app.get('/', test);

app.use(notFound);

app.use(globalErrorHandler);

export default app;
