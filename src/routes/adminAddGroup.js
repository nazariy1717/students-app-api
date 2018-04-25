import express from 'express';
import Group from '../models/admin/Group'

const router = express.Router();

router.post('/', (req,res) => {
    console.log(req.body.data.groupName);
    const { groupName } = req.body.data.groupName;

    const group = new Group();
    group.groupName = req.body.data.groupName;
    group.save()
        .then(group => res.status(201).json({ group }))
        .catch(err => res.status(400).json({ err }));


});

export default router;

