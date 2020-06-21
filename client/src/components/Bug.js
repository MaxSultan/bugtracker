import React from 'react'
import {Table, Icon, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Bug = ({ id, name, status, assignedTo, deadline }) => {

    const positive = (status) => {
       return status === 'closed' ? (
        <Table.Row positive>
        <Table.Cell>
            <Dropdown text={name} pointing className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Header>Options</Dropdown.Header>
                    <Dropdown.Item>
                        <Link to={{
                            pathname: '/edit',
                            state: {
                                id,
                                initName: name,
                                initStatus: status,
                                initAssignedTo: assignedTo,
                                initDeadline: deadline,
                            }
                            }}>Edit Bug</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>View Bug</Dropdown.Item>
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
                        <Dropdown.Header>Options</Dropdown.Header>
                        <Dropdown.Item><Link to={{
                            pathname: '/edit',
                            state: {
                                id,
                                initName: name,
                                initStatus: status,
                                initAssignedTo: assignedTo,
                                initDeadline: deadline,
                            }
                            }}>Edit Bug</Link></Dropdown.Item>
                        <Dropdown.Item>View Bug</Dropdown.Item>
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