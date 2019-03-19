import React, {useState, useEffect} from 'react';
import { 
  Container,
  Icon,
  Header
 } from 'semantic-ui-react';

import Navigation from './Navigation.jsx';
import TopicItem from './TopicItem.jsx';
import TopicView from './TopicView.jsx';
import BottomBar from './BottomBar.jsx';

function App() {

  const [topics, setTopics] = useState([]);
  const [currentView, setView] = useState('home');

  const quotes = [
    'A man travels the world over in search of what he needs and returns home to find it. <em>George A. Moore</em>',
    'There is nothing like staying at home for real comfort. <em>Jane Austen</em>',
    'Home is the nicest word there is. <em>Laura Ingalis Wilder</em>'
  ];

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = () => {
    fetch('/topics')
      .then((res) => res.json())
      .then((topicList) => setTopics(topicList.map(topic => {
        topic.parents = JSON.parse(topic.parents).parentArr;
        return topic;
      })))
      .catch((err) => console.log(err));
  }

  const addTopic = (event, title, text, parentArr) => {
    event.preventDefault();
    console.log(parentArr);
    let parents = JSON.stringify({parentArr});
    let data = {title, text, parents};

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
    if (currentView === 'home') {
      let parentTopics = [];
      topics.forEach(topic => {
        if (!topic.parents.length) {
          parentTopics.push(topic);
        }
      })
      return (
        <div>
          {parentTopics.map(topic => <TopicItem topic={topic} setView={setView.bind(this)} key={topic._id}/>)}
        </div>
      )
    } else {
      let relatedTopics = [];
      topics.forEach(topic => {
        if (topic.parents.length && topic.parents[topic.parents.length - 1][0] === currentView._id) {
          relatedTopics.push(topic);
        }
      });
      return (
        <TopicView topic={currentView} relatedTopics={relatedTopics} setView={setView.bind(this)} />
      )
    }
  }

  return (
    <Container fluid>
      <Header as="h1" icon textAlign="center" className="header">
        <Icon name="home" onClick={() => setView('home')} />
        <Header.Content>WikiHome</Header.Content>
      </Header>
      <Navigation currentView={currentView} setView={setView} />
      {renderCurrent()}
      <BottomBar addTopic={addTopic.bind(this)} currentView={currentView} />
    </Container>
  );
}

export default App;