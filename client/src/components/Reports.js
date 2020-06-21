import React from 'react'

export default function Reports({ bugs }) {

    const activeBugs = () => {
        const active = bugs.filter(b => b.status !== 'closed')
        return  active.length
    }

    return (
        <div>
             <h1>Reports</h1>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <h3 style={{backgroundColor:'white', height:'100px', borderRadius:'20px', padding:'10px'}}>
                    Total Number of bugs: <br/><br/> <span style={{fontSize:'60px'}}>{bugs.length}</span>
                </h3>
                <h3 style={{backgroundColor:'white', height:'100px', borderRadius:'20px', padding:'10px'}}>
                    Number of active bugs: <br/><br/> <span style={{fontSize:'60px'}}>{activeBugs()}</span>
                </h3>
                <div>
                    <div style={styles.graph}>
                        <div style={{height:`${activeBugs() * 10}px`,width:'20px', backgroundColor:'blue', marginLeft:'10px', color:'white'}}>{activeBugs()}</div>
                        <div style={{height:`${bugs.length * 10}px`,width:'20px', backgroundColor:'blue', marginLeft:'10px', color:'white'}}>{bugs.length}</div>
                    </div>
                    <h4 style={{transform:'rotate(45deg)', position:'relative', left:'-55px'}}>active bugs</h4>
                    <h4 style={{transform:'rotate(45deg)', position:'relative', left:'-25px', top:'-50px'}}>total bugs</h4>
                </div>
            </div>
        </div>
    )
}

const styles = {
    graph:{
        borderLeft: '2px solid black',
        borderBottom: '2px solid black',
        height: '200px',
        width:'200px',
        display: 'flex',
        justifyContent: 'flex-begining',
        alignItems: 'flex-end'
    }
}