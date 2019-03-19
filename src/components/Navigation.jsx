import React from 'react';
import { 
  Container,
  Breadcrumb
 } from 'semantic-ui-react';

function Navigation({currentView, topics, setView}) {

  let path = [];

  function buildPath(node) {
    if (node === 'home') {
      return;
    }
    topics.forEach(topic => {
      if (topic._id === node.parent) {
        path.unshift(topic);
        buildPath(topic);
      }
    })
  }

  buildPath(currentView);

  const sections = path.map(topic => {
    return {
      key: topic._id,
      content: (<span onClick={() => setView(JSON.parse(JSON.stringify(topic)))}>{topic.title}</span>),
      link: true
    }
  })

  sections.unshift(
    {
      key: 'home',
      content: (<span onClick={() => setView('home')}>Home</span>),
      link: true
    }
  )

  if (currentView !== 'home') {
    sections.push(
      {
        key: 'current',
        content: currentView.title,
        active: true
      }
    )
  }

  return (
    <Container>
      <Breadcrumb className="breadcrumbs" icon='right angle' sections={sections} />
    </Container>
  )
}

export default Navigation;