import React from 'react';
import { 
  Segment, Header
 } from 'semantic-ui-react';

function Topic({title, text}) {
  return (
    <Segment raised>
      <Header as='h2'>{title + ', ' + text}</Header>
    </Segment>
  )
}

export default Topic;