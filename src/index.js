import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import About from './components/About';
import LineInfo from './components/LineInfo';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/about' component={About}/>
      <Route path="/:name" component={LineInfo}/>
    </Switch>
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();
