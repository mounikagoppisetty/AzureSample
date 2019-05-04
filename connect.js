const express=require('express');
const bodyParser=require('body-parser');

//initializing app to use express
const app=express();

//parse the body of request
app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//listen to port 3000
app.listen(process.env.PORT||3000,()=>console.log('listening on port 3000.....'))