import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Homepage , Userdetails } from './App';
import { Layout } from './components/Layout';
import {CreateUser} from './createuser';
import {EditUser} from './edituser';
ReactDOM.render(
  <Layout>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/userdetails/:student_id" component={Userdetails} />
        <Route exact path="/createuser" component={CreateUser} />
        <Route exact path="/edituser/:student_id" component={EditUser} />
      </Switch>
    </Router>
  </Layout>,
  document.getElementById('root')
);