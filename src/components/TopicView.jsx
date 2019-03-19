import React from 'react';
import { 
  Container,
  Segment, 
  Header
 } from 'semantic-ui-react';
 import TopicItem from './TopicItem.jsx';

function TopicView({topic, relatedTopics, setView}) {
  return (
    <Container >
      <Segment compact className="topic-title">
        <Header as='h2' className="topic-tile-header">{topic.title.toUpperCase()}</Header>
      </Segment>
      <p>{topic.text}</p>
      {relatedTopics.map(topic => <TopicItem topic={topic} setView={setView} key={topic._id}/>)}
    </Container>
  )
}

export default TopicView;