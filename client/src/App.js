import React,{useState, useEffect} from 'react';
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
import { Search } from 'semantic-ui-react';
import UserProfile from './components/User/UserProfile';


function App() {
  const [bugs, setBugs] = useState([])

  useEffect( () => {
    axios.get('/api/bugs')
    .then(res => { 
        setBugs(res.data)
    })
    .catch(err => {console.log(err)})
  }, []) 

  async function addBug(bug){
    const res = axios.post('/api/bugs', bug)
    setBugs([res.data, ...bugs])
  }
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' render ={(props) => <Bugs {...props} bugs={bugs} setBugs={setBugs}/>}/>
        <Route exact path='/add' render={(props) => (<BugForm {...props} addBug={addBug}/>)}/>
        <Route exact path='/reports' component={Reports}/>
        <Route exact path='/home' render={(props) => (<Home {...props} bugs={bugs}/>)}/>
        <Route exact path='/user' render={(props) => (<UserProfile {...props} bugs={bugs}/>)}/>
        <Route render={(props) => (<Search {...props} bugs={bugs}/>)}/>
      </Switch>
      <br/>
    </div>
  );
}


export default App;
