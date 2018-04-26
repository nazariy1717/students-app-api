import express from 'express';
import Group from '../models/admin/Group'

const router = express.Router();

router.post('/', (req,res) => {
    const group = new Group();
    group.groupName = req.body.data.groupName;
    group.save()
        .then(group => res.status(201).json({ success: { groupName: group.groupName}}))
        .catch(err => res.status(400).json({ errors: {global: 'Something went wrong'}}));
});

export default router;
