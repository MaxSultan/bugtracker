import React, {useState} from "react";
import { Form, } from "semantic-ui-react";

const UserForm= () =>  {
    const [username, setUsername] = useState('')
    const [membershipLevel, setMembershipLevel] = useState('')
    const [formValue, setFormValue] = useState(username, membershipLevel)
  
  const handleChange = (e, { name, value }) => setFormValue({ [name]: value, });
  
 const  handleSubmit = (e) => {
    e.preventDefault();
  }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={handleChange}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
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