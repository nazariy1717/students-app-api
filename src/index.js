import express from 'express';

const app = express();


app.get('/*', (req, res) => {

});


app.listen(8080, () => console.log('Running on localhost'))