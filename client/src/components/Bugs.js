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
            <div style={styles.top}>
            <h1 style={styles.label}>BugTracker</h1>
                <Button to='/add' style={styles.button}><Link style={styles.link} to={{
                            pathname: '/add',
                            state: {
                                id: false,
                                initName: false,
                                initStatus: false,
                                initAssignedTo: false,
                                initDeadline: false,
                            }
                            }}>Add Bug</Link></Button>
            </div>
        <Table celled >
            <Table.Header >
                <Table.Row>
                    <Table.HeaderCell style={styles.table}>Name</Table.HeaderCell>
                    <Table.HeaderCell style={styles.table}>Status</Table.HeaderCell>
                    <Table.HeaderCell style={styles.table}>Assigned To</Table.HeaderCell>
                    <Table.HeaderCell style={styles.table}>Deadline</Table.HeaderCell>
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

const styles = {
    table: {
        backgroundColor: '#3f5164',
        color:'#d6d6e1',
    },
    button: {
        backgroundColor: '#667582',
        paddingRight: '40px',
        paddingLeft:'40px',
        marginTop: '60px',
        marginBottom: '60px',
    },
    link:{
        color: '#e5e3eb',
    },
    label:{
        color:'#101c17',
        fontSize: '100px',
    },
    top:{
        display: 'flex',
        justifyContent: 'space-around'
    }
}