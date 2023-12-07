import {
  TAcdemiSemCode,
  TAcdemiSemName,
  TMonths,
} from './academicSemes.interface';

export const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcdemiSemName: TAcdemiSemName[] = ['Autumn', 'Summar', 'Fall'];
export const AcdemiSemCode: TAcdemiSemCode[] = ['01', '02', '03'];

export const academicSemesterNameCodeMapper = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};
