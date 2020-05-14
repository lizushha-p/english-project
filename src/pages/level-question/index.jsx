import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { history } from '../../history';
import {ReactComponent as ImageQuestion} from './assets/level-question.svg'
import './index.css'

class LevelQuestion extends Component{

  onClickMainTestHandler = () => {
    history.push('/start-test')
  }

  render(){
    return(
      <div className='wrapperLevelQuestion'>
        <h1 className='questionLevel'>- Какой у вас уровень?</h1>
        <div className='wrapperYourLevel'>
          <div>
            <h3 className='reasonQuestion'>Мы хотим определить ваш уровень <br/> английского, чтобы направить вас в нужную часть курса</h3>
            <Button 
              className='buttonGoTest' 
              variant="outlined"
              onClick={this.onClickMainTestHandler}
            >
              Перейти к тесту
            </Button>
          </div>
          <div>
            < ImageQuestion />
          </div>
        </div>
      </div>
    )
  }
}

export default LevelQuestion