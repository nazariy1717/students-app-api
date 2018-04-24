import express from 'express';
import Admin from '../models/Admin'


const router = express.Router();

router.post('/', (req,res) => {
    const { credentials } = req.body;
    Admin.findOne({ login: credentials.login }).then(admin =>{
        if(admin && admin.isValidPassword(credentials.password)){
            res.json({ admin: admin.toAuthJson() });
        } else {
            res.status(400).json({ errors: {global: 'Invalid credentials'}});
        }
    })
});

export default router;

