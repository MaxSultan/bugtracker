import React from 'react'
import SearchBar from './SearchBar'
import { Image } from 'semantic-ui-react'
import froggy from './img/froggy.png'

export default function Home({ bugs }) {

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Image src={froggy} style={{maxHeight:'300px', maxWidth:'300px'}}></Image>
            <h1>DashBoard</h1>
            <SearchBar bugs={bugs}/>
        </div>
    )
}
