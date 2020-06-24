import React, { useState, useContext } from 'react';
import {Form, Container, Message} from 'semantic-ui-react'
import { useLocation, Redirect, browserHistory, useHistory } from 'react-router-dom';
import { BugContext } from '../Provider/BugProvider';

export default function BugForm({ addBug, updateBug }){
    const location = useLocation();
    const { update, add } = useContext(BugContext)
    const history = useHistory();
    const { id, initName, initStatus, initAssignedTo, initDeadline } = location.state
    const [name, setName] = useState(initName ? initName  : '')
    const [status, setStatus] = useState(initStatus ? initStatus : '')
    const [assignedTo,setAssignedTo] = useState(initAssignedTo ? initAssignedTo : '')
    const [deadline, setDeadline] = useState(initDeadline ? initDeadline : '')
  

    const handleSubmit = (e) => {
      const bug = {name, status, assignedTo, deadline}
      id ? update(id, bug) : add(bug)
      setName('')
      setStatus('')
      setAssignedTo('')
      setDeadline('')
      history.push('/')
    }

    const handleChange = (e, { name, value }) => {
      if(e.target.name ==='name'){
        setName(e.target.value)
    } else if(name === 'status'){
        setStatus(value)
    } else if(e.target.name === 'assignedTo'){
        setAssignedTo(e.target.value)
    }else if (e.target.name === 'deadline'){
      setDeadline(e.target.value)
    } return
    }

    const options = [
        { key: 'o', text: 're-opened', value: 're-opened' },
        { key: 'a', text: 'assigned', value: 'assigned' },
        { key: 'r', text: 'resolved', value: 'resolved' },
        { key: 'c', text: 'closed', value: 'closed'},
      ]

    return (
      <Container>
        <Form onSubmit={handleSubmit}>
            { id ? <h1>Edit Bug</h1> : <h1>Add Bug</h1>}
            <Form.Input 
            required 
            placeholder={'Enter Bug Name'}
            name='name'
            label={'Bug Name'}
            value={name}
            onChange={handleChange}
            />
             <Form.Select
            required
            options={options}
            label='Status'
            name='status'
            value={status}
            placeholder='Enter Bug Status'
            onChange={handleChange}
            />
            <Form.Input 
            required 
            name='assignedTo'
            placeholder={'Enter the developer assigned to this bug'}
            label={'Assigned to'}
            value={assignedTo}
            onChange={handleChange}
            />
            <Form.Input 
            required 
            placeholder={'Enter Deadline'}
            name='deadline'
            label={'Deadline'}
            value={deadline}
            onChange={handleChange}
            />
            <Form.Button>{id ? 'Update Bug' : 'Add Bug'}</Form.Button>
        </Form>
        </Container>
    )
}
