import { model, Schema } from 'mongoose';

export const Student = model('Student', new Schema({
  name: {
    type: String,
    require: true
  },
  classesPerWeek: {
    type: Number,
    required: true,
    default: 1,
  },
  trainingClasses: {
    required: true,
    type: [{
      class: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'TrainingClass'
      }
    }]
  }
}));
