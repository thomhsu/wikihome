import React, {useState} from 'react';
import { 
  Menu,
  Modal,
  Button,
  Form,
  Search,
 } from 'semantic-ui-react';


function BottomBar() {

  const [topics, setTopics] = useState([]);
  const [open, newTopicOpened] = useState(false);

  return (
    <Menu
      className='inverted bottom fixed'
    >
      <Menu.Item
        name='search'
      >
        <Search />
      </Menu.Item>
      <Menu.Item
        name='newTopic'
        onClick={() => newTopicOpened(true)}  
      >
        Add New Topic  
      </Menu.Item>

      <Modal size='fullscreen' open={open} onClose={() => newTopicOpened(false)}>
        <Modal.Header>Add a New Topic</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input fluid label='Title' placeholder='My topic'/>
          </Form>
          <Form>
            <Form.TextArea fluid label='Text' placeholder='Blah blah blah...'/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => newTopicOpened(false)} >Cancel</Button>
          <Button positive icon='checkmark' labelPosition='right' content='Yes' />
        </Modal.Actions>
      </Modal>
    </Menu>
  );
}

export default BottomBar;