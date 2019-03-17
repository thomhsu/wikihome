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

  // useEffect(() => {
  //   getTopics();
  // });

  const getTopics = function() {
    fetch('/topics')
      .then((topics) => setTopics(topics))
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
      <Header as='h1'>WikiHowse</Header>
      <BottomBar addTopic={addTopic} />
    </Container>
  );
}

export default App;