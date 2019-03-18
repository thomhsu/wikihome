const Topic = require('../models/topic.js');

module.exports.getTopics = async (req, res) => {
  const data = await Topic.find({}).sort('title');
  res.send(data);
}

module.exports.createNewTopic = (req, res) => {
  const topic = req.body;
  console.log(req.body)
  const newTopic = new Topic ({
    title: topic.title,
    text: topic.text,
    keywords: topic.keywords,
  })
  newTopic.save()
    .then(data => res.send(data))
    .catch(err => console.log(err));
};
