import mongoose from 'mongoose';
import { TGenericErrorRsponse } from '../interface/error.interface';

const handelCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorRsponse => {
  const errorSources = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID ',
    errorSources,
  };
};

export default handelCastError;
