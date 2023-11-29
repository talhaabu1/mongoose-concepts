import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
//? pre save  middleware/ hook
userSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook : we will save te data');

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  // hashing password and save into db

  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt));
  next();
});

//? post save middleware/ hook
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const userSchemaModel = model('User', userSchema);
