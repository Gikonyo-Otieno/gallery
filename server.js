const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const config = require('./_config');

// test if the database has connected successfully
const env = process.env.NODE_ENV || 'development'; 
const mongodb_url = config.mongoURI[env]; 

mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully to ${env} environment`))
  .catch((err) => console.error('Database connection error:', err));

// Initializing the app
const app = express();


// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);

const image = ('./routes/image');
const index = ('./routes/index');


 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});