import express from 'express';
import Teacher from '../../models/Teacher'


const router = express.Router();

router.post('/', (req,res) => {
    const { credentials } = req.body;

    Teacher.findOne({ login: credentials.login }).then(teacher =>{
        if(teacher && teacher.isValidPassword(credentials.password)){
            res.json({ teacher: teacher.toAuthJson(),name: teacher.name });
        } else {
            res.status(400).json({ errors: {global: 'Invalid credentials'}});
        }
    })

});

export default router;

