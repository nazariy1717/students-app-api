import express from 'express';
import Lesson from '../../../models/Lesson'

const router = express.Router();


router.get('/', (req,res) => {



    Lesson.aggregate([
        {
            $lookup:
                {
                    from: "teachers",
                    localField: "teacherId",
                    foreignField: "_id",
                    as: "teacher"
                },

        },
        {
            $lookup:
                {
                    from: "groups",
                    localField: "groupId",
                    foreignField: "_id",
                    as: "group"
                },

        },
    ], function(err, lesson){


        let lessonsMap = lesson.map( lesson =>(
            {
                name: lesson.name,
                teacher: lesson.teacher[0].name,
                group: lesson.group[0].groupName,
                number: lesson.number,
                day: lesson.day,

            }
        ));

        console.log(lessonsMap);

        if(lessonsMap.length > 0){
            res.json({ lessonsMap });
        } else{
            res.status(400).json({ errors: 'Не знайдено жодної групи'});
        }


    });

});


export default router;
