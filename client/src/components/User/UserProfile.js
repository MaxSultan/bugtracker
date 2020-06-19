import React, {useState} from 'react'
import User from './User'
import UserForm from './UserForm'


export default function UserProfile() {
    const [toggleForm, setToggleForm] = useState(false)
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
        <User/>
        {toggleForm && <UserForm/>}
        </div>
    )
}
