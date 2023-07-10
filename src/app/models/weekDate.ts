import { model, Schema } from 'mongoose';

export const WeekDate = model('WeekDate', new Schema({
  label: {
    type: String,
    enum: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
    default: 'SEG',
    require: true
  },
}));
