import { ZodError, ZodIssue } from 'zod';
import {
  TErrorSources,
  TGenericErrorRsponse,
} from '../interface/error.interface';

const handleZodError = (err: ZodError): TGenericErrorRsponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleZodError;
