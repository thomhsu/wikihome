import React from 'react';
import { 
  Segment, Header
 } from 'semantic-ui-react';

function TopicItem({topic, setView}) {
  return (
    <Segment compact inverted className="topic-item" onClick={() => setView(topic)}>
      <Header as="h2" className="topic-item-header">{topic.title.toUpperCase()}</Header>
    </Segment>
  )
}

export default TopicItem;