import express from 'express';
import Student from '../../models/Student'


const router = express.Router();

router.post('/', (req,res) => {
    const { credentials } = req.body;

    Student.findOne({ login: credentials.login }).then(student =>{
        if(student && student.isValidPassword(credentials.password)){
            res.json({ student: student.toAuthJson(),name: student.name });
        } else {
            res.status(400).json({ errors: {global: 'Invalid credentials'}});
        }
    })

});

export default router;

