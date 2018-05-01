import express from 'express';
import Teacher from '../../models/Teacher'

const router = express.Router();

router.post('/', (req,res) => {

    Teacher.findOneAndRemove({ login: req.body.teacher.login }).then( teacher => {
        res.json({ teacher });
    });

});

export default router;
