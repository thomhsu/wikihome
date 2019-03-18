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
  const [currentView, setView] = useState('wiki');

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

  const addTopic = function(event, title, text) {
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
      .then(() => getTopics())
      .catch(err => console.log(err));
  }

  const renderCurrent = function() {
    if (currentView === 'wiki') {
      return (
        <div>
          {topics.map(topic => <Topic title={topic.title} text={topic.text} id={topic._id} key={topic._id}/>)}
        </div>
      )
    }
  }

  return (
    <Container fluid>
      <Header as="h1" icon textAlign="center" className="header">
        <Icon name="home" />
        <Header.Content>WikiHome</Header.Content>
      </Header>
      {renderCurrent()}
      <BottomBar addTopic={addTopic.bind(this)} />
    </Container>
  );
}

export default App;