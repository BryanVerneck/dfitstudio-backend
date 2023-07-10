import { Request, Response } from 'express';

import { Student } from '../../models/student';
import { TrainingClass } from '../../models/TrainingClass';

export async function deleteAllStudents(req: Request, res: Response){
  try {
    await Student.deleteMany();
    await TrainingClass.updateMany({}, { $set: { students: [] } });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
