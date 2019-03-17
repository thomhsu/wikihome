const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/index');
const query = require('./db/controllers/query');

const port = 3000;
 
app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/topics', query.getTopics);
app.post('/topics', query.createNewTopic);
 
app.listen(port, () => console.log(`Listening on ${port}...`));