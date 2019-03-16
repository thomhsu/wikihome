import React, {useState} from 'react';
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

  return (
    <Container fluid>
      <Header as='h1'>WikiHowse</Header>
      <BottomBar />
    </Container>
  );
}

export default App;