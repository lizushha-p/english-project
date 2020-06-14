import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Main from './pages/main/index'
import SignUp from './pages/sign-up/index'
import SignIn from './pages/sign-in/index'
import LevelQuestion from './pages/level-question/index'
import StartTest from './pages/start-test/index'
import Course from './pages/course/index'
import Part1 from './pages/lesson1/part_1/index'
import PageInDevelop from './pages/page_in_develop/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/about' exact component={Main}/>
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/level-question' exact component={LevelQuestion} />
        <Route path='/start-test' exact component={StartTest} />
        <Route path='/course' exact component={Course} />
        <Route path='/friend-request' exact component={Part1} />
        <Route path='/error-exist-course' exact  component={PageInDevelop} />
      </Switch>
    </div>
  );
}

export default App;
