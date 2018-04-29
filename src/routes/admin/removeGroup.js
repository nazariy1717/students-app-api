import express from 'express';
import Group from '../../models/Group'

const router = express.Router();

router.post('/', (req,res) => {

    const { data } = req.body;

    Group.findOneAndRemove({ _id: req.body.group.id }).then( group => {
        res.json({ group });
    });




});

export default router;
