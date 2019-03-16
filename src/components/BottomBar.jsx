import React, {useState} from 'react';
import { 
  Menu,
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

  return (
    <Menu
      className='inverted bottom fixed'
    >
      <Menu.Item
        name='search'>
        <Search />
      </Menu.Item>
      <Menu.Item
        name='newTopic'>
        Add New Topic  
      </Menu.Item>

    </Menu>
  );
}

export default BottomBar;