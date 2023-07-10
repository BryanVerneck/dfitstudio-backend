import { Request, Response } from 'express';

import { Student } from '../../models/student';

export async function getStudentByName(req: Request, res: Response){
  try {
    const { studentName } = req.params;

    const student = await Student.findOne({ name: studentName });

    if(student){
      res.status(200).json(student);
    } else {
      res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}
