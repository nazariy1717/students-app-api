import express from 'express';
import Lesson from '../../../models/Lesson'
import LessonDate from '../../../models/LessonDate'
import parseErrors from '../../../utils/parseErrors'

import moment from 'moment';

const router = express.Router();

const lessonSchedule = {
    1: {
        hours: 8,
        minutes: 30
    },
    2: {
        hours: 10,
        minutes: 20
    },
    3: {
        hours: 12,
        minutes: 10
    },
    4: {
        hours: 14,
        minutes: 15
    }
};

let month =  moment().month(8);
let arr = [];
const startOfMonth = month.clone().startOf('month');
const endOfMonth   = month.clone().endOf('month');


function setLessonsDate(lessonNumber, dayOfWeek){

    let numberOfLesson = lessonSchedule[lessonNumber];

    let tmp = startOfMonth.clone().day(dayOfWeek).hour(numberOfLesson.hours).minutes(numberOfLesson.minutes);

    if(tmp.isBefore(startOfMonth)){
        tmp.add(7, 'days');
    }

    while( tmp.isBefore(endOfMonth) ){
        arr.push(tmp.format('DD-MM-YYYY hh:mm'));
        tmp.add(7, 'days');
    }

}

router.post('/', (req,res) => {

    const data = req.body.lesson;
    const lesson = new Lesson();
    const lessonDate = new LessonDate();

    lesson.name = data.name;
    lesson.teacherId = data.teacher;
    lesson.groupId = data.group;
    lesson.number = data.number;
    lesson.day = data.day;

    setLessonsDate(lesson.number, lesson.day);

    lesson.save()
        .then(response => {
            res.status(201).json({ response });
            lessonDate.lessonId = response._id;
            lessonDate.dates = arr;
            lessonDate.save();
        } )
        .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));

});

export default router;
