import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bug from './Bug'
import {Table, Container, Button, } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Bugs = ({ getBugs, }) => {
    const [bugs, setBugs] = useState([])

    async function getBugs(){
        const res = await axios.get('/api/bugs')
          setBugs(res.data)
      }

    useEffect( () => {
       getBugs()
    },[]) 

    const renderBugs = () => {
        return bugs.map( bug => <Bug key={bug.id} {...bug}/>)
    }

    const TableExamplePositiveNegative = () => (
        <Container>
            <h1>BugTracker</h1>
            <Container>
                <Button to='/add' color='black'><Link to={{
                            pathname: '/add',
                            state: {
                                id: false,
                                initName: false,
                                initStatus: false,
                                initAssignedTo: false,
                                initDeadline: false,
                            }
                            }}>Add Bug</Link></Button>
            </Container>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Assigned To</Table.HeaderCell>
                    <Table.HeaderCell>Deadline</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {renderBugs()}
            </Table.Body>
        </Table>
        </Container>
        )

    return (
       TableExamplePositiveNegative()
    )
}


export default Bugs;