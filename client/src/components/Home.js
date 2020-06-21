import React from 'react'
import SearchBar from './SearchBar'
import { Image } from 'semantic-ui-react'
import STICKY from './img/STICKY.jpg'

export default function Home({ bugs }) {

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>DashBoard</h1>
            <Image src={STICKY} style={{maxHeight:'300px', maxWidth:'300px'}}></Image>
            <SearchBar bugs={bugs}/>
        </div>
    )
}
