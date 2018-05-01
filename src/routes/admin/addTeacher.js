import express from 'express';
import Teacher from '../../models/Teacher'
import parseErrors from '../../utils/parseErrors'

const router = express.Router();

router.post('/', (req,res) => {

    const data = req.body.teacher;
    const teacher = new Teacher();
    teacher.login = data.login;
    teacher.password = data.password;
    teacher.setPassword(data.password);
    teacher.name = data.name;

    teacher.save()
        .then(response => res.status(201).json({ response }))
        .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));

});

export default router;
