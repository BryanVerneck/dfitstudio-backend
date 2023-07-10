import { Request, Response } from 'express';

import { TrainingClass } from '../../models/TrainingClass';

export async function listTrainigClasses(req: Request, res: Response){
  try {
    const trainingClasses = await TrainingClass.find()
      .populate('students.student');

    res.json(trainingClasses);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
