import React from 'react';
import { 
  Segment, Header
 } from 'semantic-ui-react';

function TopicView({title, text, id, setView}) {
  return (
    <Segment compact inverted className="topic" onClick={() => setView(id)}>
      <Header as="h2" className="topic-header">{title.toUpperCase() + ', ' + id}</Header>
    </Segment>
  )
}

export default TopicView;