import express from 'express';
import User from '../models/User'


const router = express.Router();

router.post('/', (req,res) => {
    const { credentials } = req.body;
    User.findOne({ email: credentials.email }).then(user =>{
        if(user && user.isValidPassword(credentials.password)){
            res.json({ user: user.toAuthJson() });
        } else {
            res.status(400).json({ errors: {global: 'Invalid credentials'}});
        }
    })
});

export default router;

