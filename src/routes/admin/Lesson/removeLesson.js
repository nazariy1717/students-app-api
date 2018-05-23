import express from 'express';
import Lesson from '../../../models/Lesson'
import LessonDate from '../../../models/LessonDate'

const router = express.Router();

router.post('/', (req,res) => {

    // console.log(req.body.lesson);


    Lesson.findOneAndRemove({ name: req.body.lesson.name }).then( lesson => {
        console.log(lesson);

        LessonDate.findOneAndRemove({ lessonId: lesson._id }).then( lesson => {
            console.log(lesson);




            res.json({ lesson });
        });



        // res.json({ student });
    });

});

export default router;
