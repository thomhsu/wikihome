const Topic = require('../models/topic.js');

module.exports.createNewTopic = (req, res) => {
  let topic = req.body;
  const newTopic = new Topic ({
    title: topic.title,
    text: topic.text,
    keywords: topic.keywords,
  })
  newTopic.save()
    .then(data => res.send(data))
    .catch(err => console.log(err));
};
