import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TStudent,
  TStudentModel,
  TStudentName,
} from './student.interface';
import validator from 'validator';

const nameSchema = new Schema<TStudentName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    maxlength: [10, 'First name lenth max 10 characters change please'],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);

        return firstNameStr === value;
      },
      message: '{VALUE} is not a Capitalized name',
    },
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not a valida name',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, 'Father name is required.'] },
  motherName: { type: String, required: [true, 'Mother name is required.'] },
  fatherContactName: {
    type: String,
    required: [true, 'Father contact name is required.'],
  },
  motherContactName: {
    type: String,
    required: [true, 'Mother contact name is required.'],
  },
});

const studentSchema = new Schema<TStudent, TStudentModel>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required.'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User',
    },
    name: {
      type: nameSchema,
      required: [true, 'Student name is required.'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: [true, 'Gender is required.'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is required.'],
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} this emali is not a valid',
      },
    },
    contactNO: {
      type: String,
      required: [true, 'Contact number is required.'],
    },
    emergencyContactNO: {
      type: String,
      required: [true, 'Emergency contact number is required.'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message:
          '{VALUE} is not a valid blood group. Please choose from A+, A-, B+, B-, AB+, AB-, O+, O-.',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required.'],
    },
    permanentAddress: { type: String },
    monthlySalary: {
      type: Number,
      required: [true, 'Monthly salary is required.'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required.'],
    },
    interested: Boolean,
    profileImg: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { virtuals: true }, versionKey: false },
);

//? vartuial
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.lastName}`;
});

//? creating a custom static mehtod
studentSchema.statics.isUserExits = async function (id) {
  const userExit = await StudentModel.findOne({ id });
  return userExit;
};

//? qury middleware/ hook
studentSchema.pre('find', function (next) {
  // console.log(this);
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  // console.log(this);
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  // console.log(this);
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  // this.find({ isDeleted: { $ne: true } });
  next();
});

//? creating a custom instance method
// studentSchema.methods.isUserExits = async function (id) {
//   const userExit = await StudentModel.findOne({ id });
//   return userExit;
// };

export const StudentModel = model<TStudent, TStudentModel>(
  'Student',
  studentSchema,
);
