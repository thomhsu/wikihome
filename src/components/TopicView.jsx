import React from 'react';
import { 
  Container,
  Segment, 
  Header
 } from 'semantic-ui-react';
 import TopicItem from './TopicItem.jsx';

function TopicView({topic, relatedTopics, setView}) {

  const topicParagraphs = topic.text.split('\n').map(para => {
    return `<p>${para}</p>`
  }).join('');

  return (
    <Container >
      <Segment compact className="topic-title">
        <Header as='h2' className="topic-tile-header">{topic.title.toUpperCase()}</Header>
      </Segment>
      <div dangerouslySetInnerHTML={{__html: topicParagraphs}}></div>
      {relatedTopics.map(topic => <TopicItem topic={topic} setView={setView} key={topic._id}/>)}
    </Container>
  )
}

export default TopicView;