import React, { useContext } from 'react'
import {Table, Icon, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Bug = ({ name, status, assignedTo, deadline }) => {

    const positive = (status) => {
       return status === 'closed' ? (
        <Table.Row positive>
        <Table.Cell>
            <Dropdown text={name} pointing className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Header>Categories</Dropdown.Header>
                    <Dropdown.Item><Link>Edit Bug</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </Table.Cell>
        <Table.Cell> {status === 'closed' ? <Icon name='checkmark' /> : null }{status}</Table.Cell>
        <Table.Cell>{assignedTo}</Table.Cell>
        <Table.Cell>{deadline}</Table.Cell>
    </Table.Row>
       ) : (<Table.Row negative>
           <Table.Cell>
            <Dropdown text={name} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Categories</Dropdown.Header>
                        <Dropdown.Item><Link>Edit Bug</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Table.Cell>
                <Table.Cell> {status === 'closed' ? <Icon name='checkmark' /> : null }{status}</Table.Cell>
                <Table.Cell>{assignedTo}</Table.Cell>
                <Table.Cell>{deadline}</Table.Cell>
            </Table.Row>
          ) ;
    };

    return positive(status);
}

export default Bug;