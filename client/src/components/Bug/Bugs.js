import React, { useState, useEffect, useContext } from 'react';
import Bug from './Bug'
import {Table, Container, Button, } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import BugProvider, { BugContext } from '../Provider/BugProvider';

const Bugs = () => {
    const {bugs} =  useContext(BugContext)
    console.log(bugs)

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