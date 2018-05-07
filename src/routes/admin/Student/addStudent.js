import express from 'express';
import Student from '../../../models/Student'
import parseErrors from '../../../utils/parseErrors'

const router = express.Router();

router.post('/', (req,res) => {


    const data = req.body.student;
    const student = new Student();

    student.login = data.login;
    student.password = data.password;
    student.setPassword(data.password);
    student.name = data.name;

    student.groupId = data.groupId;




    student.save()
        .then(response =>
        {
            res.status(201).json({ response });
        })
        .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));

});

export default router;
