import React, {useState, useEffect} from 'react';
import { 
  Container,
  Icon,
  Header
 } from 'semantic-ui-react';

import Topic from './Topic.jsx';
import BottomBar from './BottomBar.jsx';

function App() {

  const [topics, setTopics] = useState([]);

  const quotes = [
    'A man travels the world over in search of what he needs and returns home to find it. <em>George A. Moore</em>',
    'There is nothing like staying at home for real comfort. <em>Jane Austen</em>',
    'Home is the nicest word there is. <em>Laura Ingalis Wilder</em>'
  ];

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = function() {
    fetch('/topics')
      .then((res) => res.json())
      .then((topicList) => setTopics(topicList))
      .catch((err) => console.log(err));
  }

  let addTopic = function(event, title, text) {
    event.preventDefault();
    let data = {title, text};

    fetch ('/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  addTopic = addTopic.bind(this);

  return (
    <Container fluid>
      <Header as='h1' icon textAlign='center'>
        <Icon name='home' circular />
        <Header.Content>WikiHome</Header.Content>
      </Header>
      {topics.map(topic => <Topic title={topic.title} text={topic.text} />)}
      <BottomBar addTopic={addTopic} />
    </Container>
  );
}

export default App;