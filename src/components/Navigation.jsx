import React from 'react';
import { 
  Breadcrumb
 } from 'semantic-ui-react';

function Navigation({topic, setView}) {
  return (
    <Segment compact inverted className="topic-item" onClick={() => setView(topic)}>
      <Header as="h2" className="topic-item-header">{topic.title.toUpperCase()}</Header>
    </Segment>
  )
}

export default Navigation;