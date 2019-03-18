import React from 'react';
import { 
  Segment, Header
 } from 'semantic-ui-react';

function TopicItem({title, text, id, setView}) {
  return (
    <Segment compact inverted className="topic-item" onClick={() => setView(id)}>
      <Header as="h2" className="topic-item-header">{title.toUpperCase()}</Header>
    </Segment>
  )
}

export default TopicItem;