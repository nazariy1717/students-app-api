import express from 'express';
import Student from '../../models/Student'

const router = express.Router();

router.post('/', (req,res) => {

    Student.findOneAndRemove({ login: req.body.student.login }).then( student => {
        res.json({ student });
    });

});

export default router;
