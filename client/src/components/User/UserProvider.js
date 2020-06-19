import React, { Component } from 'react'

export const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer;

export default class extends Component{
    state = {
        username:'Max Sultan',
        dateJoined: '06/19/2020',
        avatar: 'https://instagram.faus1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/43914015_340303416538323_178011656974750268_n.jpg?_nc_ht=instagram.faus1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=NODXKnpghKYAX_fqJdL&oh=0c234caed36ce8727af7e61c529a1540&oe=5F15FB52',
        membershipLevel: "Silver",
        updateUser: (user) => this.updateUser(user),
        bugs: [],
    }

    render(){
        return(
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}