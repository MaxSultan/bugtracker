import React,{setState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Bugs from './components/Bugs';
import BugForm from './components/BugForm';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './components/Home';
import Reports from './components/Reports';
import axios from 'axios'
import UserProfile from './components/User/UserProfile';
import { BugConsumer } from './components/Bug/BugProvider'


class App extends React.Component {
  state = {
    bugs:[]
  }

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
  return (
    <BugConsumer>
      {value => (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' render ={props => <Bugs {...props} bugs={value.bugs}/>}/>
        <Route exact path='/add' render={props => <BugForm {...props} addBug={this.addBug} />}/>
        <Route exact path='/reports' render={props => <Reports {...props} bugs={value.bugs}/>}/>
        <Route exact path='/home' render={props => <Home {...props} bugs={value.bugs}/>}/>
        <Route exact path='/user' render={props => <UserProfile {...props} bugs={value.bugs}/>}/>
        <Route exact path='/edit' render={props => <BugForm {...props} updateBug={this.updateBug} />}/>
      </Switch>
      <br/>
    </div>
      )}
    </BugConsumer>
  );
  }
}


export default App;
