import React from 'react';
import { 
  Container,
  Segment, 
  Header
 } from 'semantic-ui-react';

function TopicView({topic, relatedTopics}) {
  return (
    <Container >
      <Segment compact inverted className="topic-title">
        <Header as='h2' className="topic-tile-header">{topic.title.toUpperCase()}</Header>
      </Segment>
      <p>{topic.text}</p>
    </Container>
  )
}

export default TopicView;