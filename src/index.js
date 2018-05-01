import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import auth from './routes/admin/auth';

import addGroup from './routes/admin/addGroup';
import getGroup from './routes/admin/getGroup';
import removeGroup from './routes/admin/removeGroup';

import addStudent from './routes/admin/addStudent';
import getStudents from './routes/admin/getStudents';
import removeStudent from './routes/admin/removeStudent';

import addTeacher from './routes/admin/addTeacher';
import getTeachers from './routes/admin/getTeachers';
import removeTeacher from './routes/admin/removeTeacher';


// import auth from './routes/auth'



dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL);

/* admin auth  */
app.use('/api/admin-auth', auth);
/* admin group  */
app.use('/api/addGroup', addGroup);
app.use('/api/getGroup', getGroup);
app.use('/api/removeGroup', removeGroup);

/* admin student  */
app.use('/api/addStudent', addStudent);
app.use('/api/getStudents', getStudents);
app.use('/api/removeStudent', removeStudent);

/* admin teacher  */
app.use('/api/addTeacher', addTeacher);
app.use('/api/getTeachers', getTeachers);
app.use('/api/removeTeacher', removeTeacher);


// app.use('/api/auth', auth);




app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(8080, () => console.log('Running on localhost'));