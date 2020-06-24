import React, {useState, useContext} from "react";
import { Form, } from "semantic-ui-react";
import { UserContext } from "../Provider/UserProvider";

const UserForm= () =>  {
    const user = useContext(UserContext);
    const [username, setUsername] = useState('')
    const [membershipLevel, setMembershipLevel] = useState('')
    const [avatar, setAvatar] = useState('')
    
  
 const  handleSubmit = (e) => {
    e.preventDefault();
    user.updateUser({
        username,
        membershipLevel,
        avatar,
    })
  }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={(e, {value }) => setUsername(e.target.value)}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={(e, { value }) => setMembershipLevel(value)}
          options={membershipOptions}
        />
        {/* allows users to choose a file from their local machine but doesnt save it in db */}
        <Form.Input
          label="Add New Photo"
          type="file"
          name="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <Form.Button style={{backgroundColor:'#3f5164', color:'#d6d6e1'}}>Save</Form.Button>
      </Form>
    )
  
}

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];

export default UserForm;