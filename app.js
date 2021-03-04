const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.pluralize(null);
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

app.use(cors());
app.use(bodyParser.json());

//Import routes

const postsRouteUser = require('./routes/postUser');
app.use('/postUser', postsRouteUser);

//RUTES
app.get('/', (req, res) => {
    res.send('Welcome to the dbACPrueba API Project');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true},  () => 
console.log('Connected to DB!')
);

//LISTENING SERVER
app.listen(3000); 