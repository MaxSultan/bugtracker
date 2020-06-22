import React, { Component } from 'react'
import axios from 'axios'

export const BugContext = React.createContext()

export const BugConsumer = BugContext.Consumer;

export default class extends Component{
    state = {
        bugs: [],
    }

    // componentDidMount(){
    //     axios.get('/api/bugs')
    //     .then(res => { 
    //        this.setState({bugs: [res.data]})
    //     })
    //     .catch(err => {console.log(err)})
    // }

    async componentDidMount(){
        const res = await axios.get('/api/bugs')
        console.log(res.data)
          this.setState({bugs:res.data})
      }
    
      async componentDidUpdate(){
        const res = await axios.get('/api/bugs')
          this.setState({bugs:res.data})
      }
    
      updateBug = (id, bugObj) => {
        const res = axios.put(`/api/bugs/${id}`, {...bugObj})
            const updatedBugs = this.state.bugs.map( b => {
            if (b.id === res.data.id)
              return res.data;
            return b;
          });
          this.setState({ bugs: updatedBugs, });
      }
    
       addBug = (bug) => {
        const res = axios.post('/api/bugs', bug)
        this.setState({ bugs: [res.data, ...this.state.bugs]})
      }

    render(){
        return(
            <BugContext.Provider value={this.state}>
                {this.props.children}
            </BugContext.Provider>
        )
    }
}