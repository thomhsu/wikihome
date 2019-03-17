const Topic = require('../models/topic.js');

const createNewTopic = (req, res) => {
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

module.exports = createNewTopic;
