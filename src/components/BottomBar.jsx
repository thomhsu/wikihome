import React, {useState} from 'react';
import { 
  Menu,
  Modal,
  Button,
  Form,
  Search,
  Icon
 } from 'semantic-ui-react';


function BottomBar({addTopic, editTopic, deleteTopic, currentView}) {

  const [newTopic, newTopicModalOpened] = useState(false);
  const [editTopicModal, editTopicModalOpened] = useState(false);
  const [deleteTopicModal, deleteTopicModalOpened] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

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
        name="deleteTopic"
        onClick={() => deleteTopicModalOpened(true)}  
        className={currentView === 'home' ? 'disabled' : ''}
      >
        <Icon name="trash" />
      </Menu.Item>
      <Menu.Item
        name="editTopic"
        onClick={() => editTopicModalOpened(true)}  
        className={currentView === 'home' ? 'disabled' : ''}
      >
        <Icon name="edit" />
      </Menu.Item>
      <Menu.Item
        name="newTopic"
        onClick={() => newTopicModalOpened(true)}  
      >
        <Icon name="plus" />
      </Menu.Item>

      <Modal size="fullscreen" open={newTopic} onClose={() => newTopicModalOpened(false)}>
        <Modal.Header>Add a New Topic</Modal.Header>
        <Modal.Content>
          <Form id="newTopicForm">
            <Form.Input name="title" label="Title" placeholder="My topic" onChange={handleChange}/>
            <Form.TextArea name="text" label="Text" placeholder="Blah blah blah..." onChange={handleChange}/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => newTopicModalOpened(false)} >Cancel</Button>
          <Button positive form="newTopicForm" onClick={() => {addTopic(event, title, text, currentView._id || 'home'); newTopicModalOpened(false)}} icon="checkmark" labelPosition="right" content="Yes"/>
        </Modal.Actions>
      </Modal>

      <Modal size="fullscreen" open={editTopicModal} onClose={() => editTopicModalOpened(false)}>
        <Modal.Header>Edit {currentView.title}</Modal.Header>
        <Modal.Content>
          <Form id="editTopicForm">
            <Form.Input name="title" label="Title" defaultValue={currentView.title} onChange={handleChange}/>
            <Form.TextArea name="text" label="Text" defaultValue={currentView.text} onChange={handleChange}/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => editTopicModalOpened(false)} >Cancel</Button>
          <Button positive form="editTopicForm" onClick={() => {editTopic(event, title, text, currentView._id); editTopicModalOpened(false); currentView.title = title; currentView.text = text}} icon="checkmark" labelPosition="right" content="Yes"/>
        </Modal.Actions>
      </Modal>

      <Modal size="fullscreen" open={deleteTopicModal} onClose={() => deleteTopicModalOpened(false)}>
        <Modal.Header>Delete {currentView.title}</Modal.Header>
        <Modal.Content>
          Are you sure??  This is irreversible.
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => deleteTopicModalOpened(false)} >Cancel</Button>
          <Button positive onClick={() => {deleteTopic(currentView._id); editTopicModalOpened(false); currentView.title = title; currentView.text = text}} icon="checkmark" labelPosition="right" content="Yes"/>
        </Modal.Actions>
      </Modal>

    </Menu>
  );
}

export default BottomBar;