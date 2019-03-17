import React, {useState} from 'react';
import { 
  Menu,
  Modal,
  Button,
  Form,
  Search,
 } from 'semantic-ui-react';


function BottomBar({addTopic}) {

  const [topics, setTopics] = useState([]);
  const [open, newTopicModalOpened] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState([]);

  const handleChange = (e) => {
    const handler = {
      title: setTitle,
      text: setText
    };
    handler[e.target.name](e.target.value);
  }

  return (
    <Menu
      className="bottom fixed"
    >
      <Menu.Item
        name="search"
      >
        <Search />
      </Menu.Item>
      <Menu.Item
        name="newTopic"
        onClick={() => newTopicModalOpened(true)}  
      >
        Add New Topic  
      </Menu.Item>

      <Modal size="fullscreen" open={open} onClose={() => newTopicModalOpened(false)}>
        <Modal.Header>Add a New Topic</Modal.Header>
        <Modal.Content>
          <Form id="newTopicForm">
            <Form.Input name="title" label="Title" placeholder="My topic" onChange={handleChange}/>
            <Form.TextArea name="text" label="Text" placeholder="Blah blah blah..." onChange={handleChange}/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => newTopicModalOpened(false)} >Cancel</Button>
          <Button positive form="newTopicForm" onClick={() => addTopic(event, title, text)} icon="checkmark" labelPosition="right" content="Yes"/>
        </Modal.Actions>
      </Modal>
    </Menu>
  );
}

export default BottomBar;