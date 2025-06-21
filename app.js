const express = require('express')
const mongoose = require('mongoose');

const mongoDBUri = 'mongodb+srv://fabian:fabian@cluster0.evumg3f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
const port = 3000;

//This is used for start up the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);  
});

mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


app.get('/', (req, res) => {
    res.status(200).json({message:'Hello World'});  
});


//This is used for logging every request
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

const userRouter = require('./routes/users')

app.use('/users', userRouter)