import React, {useState} from 'react';
import { 
  Menu,
  Modal,
  Container,
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
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
        <Modal.Header>Delete Your Account</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your account</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative>No</Button>
          <Button positive icon='checkmark' labelPosition='right' content='Yes' />
        </Modal.Actions>
      </Modal>
    </Menu>
  );
}

export default BottomBar;