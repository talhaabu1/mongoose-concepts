export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcdemiSemName = 'Autumn' | 'Summar' | 'Fall';
export type TAcdemiSemCode = '01' | '02' | '03';

export interface TAcademicSemseter {
  naem: TAcademicSemseter;
  year: Date;
  code: TAcdemiSemCode;
  startMonth: TMonths;
  endMonth: TMonths;
}
