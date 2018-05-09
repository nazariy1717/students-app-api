import express from 'express';
import Lesson from '../../../models/Lesson'
import parseErrors from '../../../utils/parseErrors'

const router = express.Router();

router.post('/', (req,res) => {

    const data = req.body.lesson;
    const lesson = new Lesson();

    lesson.name = data.name;
    lesson.teacherId = data.teacher;
    lesson.groupId = data.group;
    lesson.number = data.number;
    lesson.day = data.day;

    lesson.save()
        .then(response =>
        {
            res.status(201).json({ response });
        })
        .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));

});

export default router;
