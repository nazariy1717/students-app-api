import express from 'express';
import Student from '../../models/Student'

const router = express.Router();


router.get('/', (req,res) => {
    Student.find({}, function(err, groups) {
        let studentsMap = groups.map( student =>(
            {
                login: student.login,
                password: student.password,
                passwordHash: student.passwordHash,
                name: student.name,
                groupId: student.groupId,
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
