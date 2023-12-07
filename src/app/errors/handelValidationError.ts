import mongoose from 'mongoose';
import {
  TErrorSources,
  TGenericErrorRsponse,
} from '../interface/error.interface';
import httpStatus from 'http-status';

const handelValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorRsponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handelValidationError;
