const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String,
  text: String,
  keywords: [String],
  children: [topicSchema]
})

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;