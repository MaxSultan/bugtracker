import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { UserConsumer } from './UserProvider'

export default function User() {
    return (
        <UserConsumer>
            {value => (
                <div>
                    <div style={{width:'70vw',display:'flex', justifyContent:'space-around'}}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{value.username}</Card.Header>
                                <Card.Meta>
                                Date Joined: {value.dateJoined}
                                </Card.Meta>
                            </Card.Content>
                            <Card.Content>
                                <p>Membership Level: {value.membershipLevel}</p>
                            </Card.Content>
                        </Card>
                        <Image src={value.avatar} avatar style={{height:'200px', width:'150px'}}/>
                    </div>
                    <Button>Edit Profile</Button>
                </div>
            )}
            
            </UserConsumer>
    )
}
