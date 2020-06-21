import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, Icon, Image } from "semantic-ui-react";
import { UserConsumer } from './User/UserProvider';

const Navbar = () => {
  
  const ImageExampleAvatar = (imgSource) => (
    <div>
      <Image src={imgSource} avatar style={{position:'absolute', top:'5px', right:'10px', height:'70px', width:'70px'}}/>
    </div>
  )

  return(
    <UserConsumer>
      {value => (
    <Menu>
      <NavLink to="/">
        <Menu.Item>
          <Icon name='bug'/>
        </Menu.Item>
      </NavLink>
      <NavLink to={{
                            pathname: '/add',
                            state: {
                                id: false,
                                initName: false,
                                initStatus: false,
                                initAssignedTo: false,
                                initDeadline: false,
                            }
                            }}>
        <Menu.Item>
          <Icon name='add'/>
        </Menu.Item>
      </NavLink>
      <NavLink to="/reports">
        <Menu.Item>
          <Icon name='chart line'/>
        </Menu.Item>
      </NavLink>
      <NavLink to="/home">
        <Menu.Item>
          <Icon name='home'/>
        </Menu.Item>
      </NavLink>
      <Menu.Menu position='right' style={{position:'relative', right:'100px'}}>
      <NavLink to="/user" style={{display:'flex', justifySelf:'flex-end'}}>
        <Menu.Item>
          <Icon name='user'/>
          {value.username}
        </Menu.Item>
      </NavLink>
      </Menu.Menu>
      {ImageExampleAvatar(value.avatar)}
    </Menu>
    )}
    </UserConsumer>
  )
}

export default Navbar;