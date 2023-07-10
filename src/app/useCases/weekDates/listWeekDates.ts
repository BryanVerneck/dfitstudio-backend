import { Request, Response } from 'express';

import { WeekDate } from '../../models/weekDate';

export async function listWeekDate(req: Request, res: Response){
  try {
    const weekDate = await WeekDate.find();

    res.json(weekDate);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
