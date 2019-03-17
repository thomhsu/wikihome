const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
});

const topicSchema = new mongoose.Schema({
  title: String,
  text: String,
  keywords: [String],
  children: [topicSchema]
})