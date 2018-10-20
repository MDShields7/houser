const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();

const app = express ();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));


app.get('/api/houses', controller.getAll)
// app.put('/api/houses', controller.update)
app.post('/api/houses', controller.post)
app.delete('/api/houses/:id', controller.delete)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`No Luke - I am your father. ${port}`);
})