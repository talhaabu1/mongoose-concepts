import { TGenericErrorRsponse } from '../interface/error.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handelDuplicateError = (err: any): TGenericErrorRsponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match ? match[1] : null;

  const errorSources = [
    {
      path: '',
      message: extractedMessage,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: ` "${extractedMessage}" already exists`,
    errorSources,
  };
};

export default handelDuplicateError;
