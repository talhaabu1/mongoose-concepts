export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorRsponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
