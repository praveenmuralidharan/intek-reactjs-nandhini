import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Homepage , Userdetails } from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/userdetails/:student_id" component={Userdetails} />
    </Switch>
  </Router>,
  document.getElementById('root')
);


{/* <React.StrictMode>
    <Userdetails />
  </React.StrictMode>, */}