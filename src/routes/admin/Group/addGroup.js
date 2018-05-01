import express from 'express';
import Group from '../../../models/Group'

const router = express.Router();

router.post('/', (req,res) => {

    const { data } = req.body;

    Group.count({ groupName: data.groupName }).then( count => {
        if(count > 0){
            res.status(400).json({ errors:  'Вказана група вже існує!'})
        } else {
            const group = new Group();
            group.groupName = req.body.data.groupName;
            group.save().then(
                group => res.status(201).json({ groupName: group.groupName, _id: group._id  }))
        }
    });


});

export default router;
