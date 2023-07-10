import { Request, Response } from 'express';

import { Student } from '../../models/student';

export async function listStudents(req: Request, res: Response){
  try {
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
