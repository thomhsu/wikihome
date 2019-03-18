const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String,
  text: String,
  parents: {
    type: Array,
    default: []
  }
})

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;