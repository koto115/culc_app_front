import { useState } from 'react';
import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import './App.css';
import Login from './features/auth/Login';
import Culc from './features/culc/culc';
import NewSchedule from './features/schedule/newSchedule';
import UpdateSchedule from './features/schedule/schedule';
// App.tsxでルートの処理

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/schedule' component={UpdateSchedule}/>
          <Route path='/culc' component={Culc}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
