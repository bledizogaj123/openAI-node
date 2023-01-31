const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const path = require('path');
const app = express();

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/openai',require('./routes/openaiRoutes'));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Server started on port ${port}`));