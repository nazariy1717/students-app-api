import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import auth from './routes/admin/auth';

import addGroup from './routes/admin/Group/addGroup';
import getGroup from './routes/admin/Group/getGroup';
import removeGroup from './routes/admin/Group/removeGroup';

import addStudent from './routes/admin/Student/addStudent';
import getStudents from './routes/admin/Student/getStudents';
import removeStudent from './routes/admin/Student/removeStudent';

import addTeacher from './routes/admin/Teacher/addTeacher';
import getTeachers from './routes/admin/Teacher/getTeachers';
import removeTeacher from './routes/admin/Teacher/removeTeacher';

import addLesson from './routes/admin/Lesson/addLesson';
import getLesson from './routes/admin/Lesson/getLesson';



import studentAuth from './routes/student/studentAuth';

import teacherAuth from './routes/teacher/teacherAuth';


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

/* admin lesson  */
app.use('/api/addLesson', addLesson);
app.use('/api/getLesson', getLesson);
// app.use('/api/removeLesson', removeLesson);


/* student auth  */
app.use('/api/student-auth', studentAuth);

/* teacher auth  */
app.use('/api/teacher-auth', teacherAuth);



// app.use('/api/auth', auth);


app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(8080, () => console.log('Running on localhost'));