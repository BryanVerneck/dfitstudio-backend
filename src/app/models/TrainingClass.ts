import { model, Schema } from 'mongoose';

export const TrainingClass = model('TrainingClass', new Schema({
  weekDate: {
    type: String,
    enum: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    default: 'Segunda-feira',
  },
  classHour: {
    type: String,
    required: true
  },
  trainingType: {
    type: String,
    required: true
  },
  students: {
    required: true,
    type: [{
      student: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Student'
      }
    }]
  }
}));
