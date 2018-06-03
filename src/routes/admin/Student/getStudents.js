import express from 'express';
import Student from '../../../models/Student'

const router = express.Router();


router.get('/', (req,res) => {

    Student.aggregate([
        {
            $lookup:
                {
                    from: "groups",
                    localField: "groupId",
                    foreignField: "_id",
                    as: "group"
                }
        }
    ], function(err, groups){

        let studentsMap = groups.map( student =>(

            {
                login: student.login,
                password: student.password,
                name: student.name,
                // groupName: student.group[0].groupName,
            }
        ));

        if(studentsMap.length > 0){
            res.json({ studentsMap });
        } else{
            res.status(400).json({ errors: 'Не знайдено жодного студента'});
        }
    });


});


export default router;
