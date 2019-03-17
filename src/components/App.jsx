import React, {useState, useEffect} from 'react';
import { 
  Container,
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
 } from 'semantic-ui-react';

import BottomBar from './BottomBar.jsx';

function App() {

  const [topics, setTopics] = useState([]);


  addTopic = addTopics.bind(this);

  useEffect(() => {
    getTopics();
  });

  const getTopics = function() {
    fetch('/topics')
      .then((topics) => setTopics(topics))
  }

  const addTopic = function(e) {
    e.preventDefault();
    let data = {title, text, keywords};

    fetch ('/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
  }

  return (
    <Container fluid>
      <Header as='h1'>WikiHowse</Header>
      <BottomBar />
    </Container>
  );
}

export default App;