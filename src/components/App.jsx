import React, {useState, useEffect} from 'react';
import { 
  Container,
  Icon,
  Header,
  Divider
 } from 'semantic-ui-react';

import Navigation from './Navigation.jsx';
import TopicItem from './TopicItem.jsx';
import TopicView from './TopicView.jsx';
import BottomBar from './BottomBar.jsx';

function App() {

  const [topics, setTopics] = useState([]);
  const [currentView, setView] = useState('home');

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = () => {
    fetch('/topics')
      .then((res) => res.json())
      .then((topicList) => setTopics(topicList))
      .catch((err) => console.log(err));
  }

  const addTopic = (event, title, text, parentId) => {
    event.preventDefault();

    let data = {title, text, parent: parentId};

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

  const editTopic = (event, title, text, topicId) => {
    event.preventDefault();

    let data = {title, text, _id: topicId};

    fetch ('/topics', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => console.log(data))
      .then(() => getTopics())
      .then(() => setView(currentView))
      .catch(err => console.log(err));
  }

  const deleteTopic = (event, topic) => {
    event.preventDefault();

    fetch ('/topics', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id: topic._id})
    })
      .then(data => console.log(data))
      .then(() => getTopics())
      .catch(err => console.log(err));
  }

  const renderCurrent = function() {
    if (currentView === 'home') {
      let mainTopics = [];
      topics.forEach(topic => {
        if (topic.parent === 'home') {
          mainTopics.push(topic);
        }
      })
      return (
        <div>
          {mainTopics.map(topic => <TopicItem topic={topic} setView={setView.bind(this)} key={topic._id}/>)}
        </div>
      )
    } else {
      let relatedTopics = [];
      topics.forEach(topic => {
        if (topic.parent === currentView._id) {
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
      <Header as="h1" icon textAlign="center" className="logo">
        <Icon name="home" onClick={() => setView('home')} />
        <Header.Content>WikiHome</Header.Content>
      </Header>
      <Divider />
      <Navigation currentView={currentView} topics={topics} setView={setView} />
      <Divider />
      {renderCurrent()}
      <BottomBar topics={topics} addTopic={addTopic.bind(this)} editTopic={editTopic.bind(this)} deleteTopic={deleteTopic.bind(this)} currentView={currentView} setView={setView.bind(this)} />
    </Container>
  );
}

export default App;