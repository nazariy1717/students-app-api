import express from 'express';
import Group from '../models/Group'

const router = express.Router();


router.get('/', (req,res) => {
    Group.find({}, function(err, groups) {

        let groupsMap = groups.map( group =>({ id: group._id, groupName: group.groupName }));
        if(groupsMap.length > 0){
            res.json({ groupsMap});
        } else{
            res.status(400).json({ errors: 'Не знайдено жодної групи'});
        }

    });
});


export default router;
