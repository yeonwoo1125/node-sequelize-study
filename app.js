const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./router/users');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/users', userRouter);

app.get('/',(req, res)=>{
   res.send('Hello World');
});

app.listen(3000, ()=>{
   console.log('listening 3000 port');
});