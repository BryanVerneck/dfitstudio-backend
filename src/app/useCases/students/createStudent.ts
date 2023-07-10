import { Request, Response } from 'express';

import { Student } from '../../models/student';

export async function createStudent(req: Request, res: Response){
  try {
    let { name } = req.body;
    const { classesPerWeek, trainingClasses } = req.body;

    name = name.toLowerCase();

    // Verificar se o aluno já existe no banco de dados
    const existingStudent = await Student.findOne({ name });

    if (existingStudent) {
      // Aluno já existe no banco de dados
      return res.status(400).json('Aluno já cadastrado');
    }

    const student = await Student.create({ name, classesPerWeek, trainingClasses });

    res.status(201).json(student);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}
