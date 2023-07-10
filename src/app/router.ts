import { Router } from 'express';
import { listTrainigClasses } from './useCases/trainingClasses/listClasses';
import { createTrainingClass } from './useCases/trainingClasses/createTrainingClass';
import { listStudents } from './useCases/students/listStudents';
import { createStudent } from './useCases/students/createStudent';
import { createWeekDate } from './useCases/weekDates/createWeekDate';
import { listWeekDate } from './useCases/weekDates/listWeekDates';
import { deleteTrainingClass } from './useCases/trainingClasses/deleteClass';
import { AddStudentToClass } from './useCases/trainingClasses/addStudentToClass';
import { RemoveStudentFromClass } from './useCases/trainingClasses/removeStudentFromClass';
import { getStudentByName } from './useCases/students/getStudentByName';
import { getTrainingClassById } from './useCases/trainingClasses/getTrainingClassById';
import { deleteAllStudents } from './useCases/students/deleteAllStudents';

export const router = Router();

// List trainingClasses
router.get('/trainingClasses', listTrainigClasses);

// get training class by Id
router.get('/getTrainingClassById/:trainingClassId', getTrainingClassById);

// create training class
router.post('/trainingClasses', createTrainingClass);

router.delete('/trainingClass/:trainingClassId', deleteTrainingClass);

// list students
router.get('/students', listStudents);

// create student
router.post('/createStudent', createStudent);

// create week date
router.post('/weekDate', createWeekDate);

//list week date
router.get('/weekDate', listWeekDate);

// remove student from training class
router.put('/removeStudentFromClass/:trainingClassId', RemoveStudentFromClass);

// add student in training class
router.put('/addStudentToClass/:trainingClassId', AddStudentToClass);

router.get('/getStudentByName/:studentName', getStudentByName);

router.delete('/deleteAllStudents', deleteAllStudents);
