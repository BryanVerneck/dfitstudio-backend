import { Request, Response } from 'express';

import { TrainingClass } from '../../models/TrainingClass';

export async function deleteTrainingClass(req: Request, res: Response){
  try {
    const { trainingClassId } = req.params;

    await TrainingClass.findByIdAndDelete(trainingClassId);

    res.sendStatus(204);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}
