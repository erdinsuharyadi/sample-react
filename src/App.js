import React from 'react';
import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Main from './pages/Main'
import Project from './pages/Project'

function App() {
  return (
    <BrowserRouter>
      <Switch> 
      <Route exact path="/" render={(props) =>     (<Main {...props} /> )} />

        <Route path="/login" render={(props) =>     (<Login {...props} /> )} />

        <Route path="/home" render={(props) => (<Home {...props} /> )} />

        <Route path="/project" render={(props) => (<Project {...props} /> )} />
        

      </Switch>
    </BrowserRouter>
  );
}

export default App;
