import React from 'react';
import { 
  Segment, Header
 } from 'semantic-ui-react';

function Topic({title, text, id}) {
  return (
    <Segment compact inverted className="topic">
      <Header as="h2" className="topic-header">{title.toUpperCase() + ', ' + id}</Header>
    </Segment>
  )
}

export default Topic;