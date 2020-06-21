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
import UserProfile from './components/User/UserProfile';


function App() {
  const [bugs, setBugs] = useState([])

  async function getBugs(){
    const res = await axios.get('/api/bugs')
      setBugs(res.data)
  }

  useEffect( () => {
    getBugs()
  }, []) 

  async function updateBug(id, bugObj){
    const res = await axios.put(`/api/bugs/${id}`, {...bugObj})
        const updatedBugs = bugs.map( b => {
        if (b.id === res.data.id)
          return res.data;
        return b;
      });
      setBugs({ updatedBugs, });
  }

  async function addBug(bug){
    const res = await axios.post('/api/bugs', bug)
    setBugs([res.data, ...bugs])
  }
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' render ={(props) => <Bugs {...props} bugs={bugs} setBugs={setBugs}/>}/>
        <Route exact path='/add' render={(props) => (<BugForm {...props} addBug={addBug} updateBug={updateBug}/>)}/>
        <Route exact path='/reports' render={(props => (<Reports {...props} bugs={bugs}/>))}/>
        <Route exact path='/home' render={(props) => (<Home {...props} bugs={bugs}/>)}/>
        <Route exact path='/user' render={(props) => (<UserProfile {...props} bugs={bugs}/>)}/>
        <Route exact path='/edit' render={(props) => <BugForm {...props} updateBug={updateBug} />}/>
      </Switch>
      <br/>
    </div>
  );
}


export default App;
