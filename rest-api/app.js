const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


//SAMPLE MIDDLEWARE
// app.use('/posts', () => {
//     console.log('This is MIDDLEWARE RUNNING');
// });

app.use(bodyParser.json());

//IMPORT ROUTES
const postRoute = require('./routes/post');
app.use('/post', postRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('TEST ROUTES');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true }, 
() => console.log('Connected to MONGODB ATLAS!'));

//Listen to a Server
app.listen(3000);