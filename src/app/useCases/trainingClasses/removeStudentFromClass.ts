import { Request, Response } from 'express';

import { TrainingClass } from '../../models/TrainingClass';
import { Student } from '../../models/student';

export async function RemoveStudentFromClass(req: Request, res: Response){
  try {
    const { trainingClassId } = req.params;
    const student = req.body;

    // atualizar aula
    await TrainingClass.findOneAndUpdate({ _id: trainingClassId }, {
      $pull: {
        students: student
      }}, { new: true });

    // atualizar aluno
    const studentRemoved = await Student.findOneAndUpdate({_id: student.student}, {
      $pull : {
        trainingClasses: {
          class: trainingClassId
        }
      }}, { new: true });

    res.status(201).json(studentRemoved);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }

}
