import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import auth from './routes/admin/auth';
import addGroup from './routes/admin/addGroup';
import getGroup from './routes/admin/getGroup';
import removeGroup from './routes/admin/removeGroup';

// import auth from './routes/auth'

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL);

/* admin */
app.use('/api/admin-auth', auth);
app.use('/api/addGroup', addGroup);
app.use('/api/getGroup', getGroup);
app.use('/api/removeGroup', removeGroup);


// app.use('/api/auth', auth);





app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(8080, () => console.log('Running on localhost'));