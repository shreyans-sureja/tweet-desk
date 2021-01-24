const e = require('express');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const tweetRoute = require('./routes/tweet');
const accountRoute = require('./routes/twitterAccounts');


dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () =>{
    console.log('connected to db!');
})

app.use(express.json());



app.use('/api/user',authRoute);
app.use('/api/tweet',tweetRoute);
app.use('/api/account',accountRoute);


app.listen(8080, ()=> console.log('server up and running!'));