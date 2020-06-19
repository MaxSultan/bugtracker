import React from 'react'
import {Table, Icon } from 'semantic-ui-react'

const Bug = ({ name, status, assignedTo, deadline }) => {

    const positive = (status) => {
       return status === 'closed' ? (
        <Table.Row positive>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell> {status === 'closed' ? <Icon name='checkmark' /> : null }{status}</Table.Cell>
        <Table.Cell>{assignedTo}</Table.Cell>
        <Table.Cell>{deadline}</Table.Cell>
    </Table.Row>
       ) : (<Table.Row negative>
           <Table.Cell>{name}</Table.Cell>
                <Table.Cell> {status === 'closed' ? <Icon name='checkmark' /> : null }{status}</Table.Cell>
                <Table.Cell>{assignedTo}</Table.Cell>
                <Table.Cell>{deadline}</Table.Cell>
            </Table.Row>
          ) ;
    };

    return positive(status);
}

export default Bug;