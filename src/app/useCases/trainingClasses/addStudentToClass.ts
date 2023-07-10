import { Request, Response } from 'express';

import { TrainingClass } from '../../models/TrainingClass';
import { Student } from '../../models/student';

export async function AddStudentToClass(req: Request, res: Response){
  try {
    const { trainingClassId } = req.params;
    const student = req.body;

    // Verificar se o aluno já existe nesta aula
    // const studentInClass = await TrainingClass.findOne({ students: { student: { _id: student.student } } });
    // if (studentInClass) {
    //   return res.status(400).json('Aluno já adicionado na aula');
    // }

    // atualizar aula
    await TrainingClass.findOneAndUpdate({ _id: trainingClassId }, {
      $addToSet : {
        students: student
      }}, { new: true });

    // atualizar aluno
    const studentAdded = await Student.findOneAndUpdate({ _id: student.student  }, {
      $addToSet : {
        trainingClasses: {
          class: trainingClassId
        }
      }}, { new: true });

    res.status(201).json(studentAdded);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }

}
