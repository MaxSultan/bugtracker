import React, { useState } from 'react';
import {Form, Container} from 'semantic-ui-react'

export default function BugForm({ addBug }){
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [assignedTo,setAssignedTo] = useState('')
    const [deadline, setDeadline] = useState('')

    const handleSubmit = (e) => {
      const bug = {name, status, assignedTo, deadline}
      addBug(bug)
      setName('')
      setStatus('')
      setAssignedTo('')
      setDeadline('')
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
            <h1>Add Bug</h1>
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
            <Form.Button>Add Bug</Form.Button>
        </Form>
        </Container>
    )
}
