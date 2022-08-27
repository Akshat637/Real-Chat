const express = require('express');
const bodyparser = require('body-parser');


const app = express();
const loginRouter = require('./routes/login');
const messageRouter = require('./routes/message');




app.use(bodyparser.urlencoded({extended: false}));

app.use(loginRouter);
app.use(messageRouter);



app.listen(4000);