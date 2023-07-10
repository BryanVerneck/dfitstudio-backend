import { Request, Response } from 'express';

import { WeekDate } from '../../models/weekDate';

export async function createWeekDate(req: Request, res: Response){
  try {
    const { label } = req.body;

    if(!['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'].includes(label)){
      return res.status(400).json({
        error: 'Week date should be one of these: SEG, TER, QUA, QUI, SEX, SAB'
      });
    }

    const weekDate = await WeekDate.create({ label });

    res.status(201).json(weekDate);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}
