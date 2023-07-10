import { Request, Response } from 'express';

import { TrainingClass } from '../../models/TrainingClass';

export async function createTrainingClass(req: Request, res: Response){
  try {
    const { weekDate, classHour, trainingType, students } = req.body;

    const trainingClass = await TrainingClass.create({ weekDate, classHour, trainingType, students });

    res.status(201).json(trainingClass);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}
