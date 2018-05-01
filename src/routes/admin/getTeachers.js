import express from 'express';
import Teacher from '../../models/Teacher'

const router = express.Router();

router.get('/', (req,res) => {
    Teacher.find({}, function(err, groups) {
        let teachersMap = groups.map( teacher =>(
            {
                login: teacher.login,
                password: teacher.password,
                name: teacher.name,
            }
        ));
        if(teachersMap.length > 0){
            res.json({ teachersMap });
        } else{
            res.status(400).json({ errors: 'Не знайдено жодного викладача'});
        }
    });
});


export default router;
