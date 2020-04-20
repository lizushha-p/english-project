import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Main from './pages/main/index'
import SignUp from './pages/sign-up/index'
import SignIn from './pages/sign-in/index'
import LevelQuestion from './pages/level-question/index'
import StartTest from './pages/start-test/index'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/level-question' exact component={LevelQuestion} />
        <Route path='/start-test' exact component={StartTest} />
      </Switch>
    </div>
  );
}

export default App;
