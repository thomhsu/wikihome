const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String,
  text: String,
  parents: String
})

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;