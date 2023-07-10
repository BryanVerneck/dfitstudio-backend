import { Request, Response } from 'express';

import { TrainingClass } from '../../models/TrainingClass';

export async function getTrainingClassById(req: Request, res: Response){
  try {
    const { trainingClassId } = req.params;

    const trainingClass = await TrainingClass.findOne({ _id: trainingClassId }).populate('students.student');

    res.json(trainingClass);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
