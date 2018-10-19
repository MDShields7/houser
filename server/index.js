const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express ();
app.use(bodyParser.json());
const controller = require('./controller');

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`No Luke - I am your father. ${port}`);
})