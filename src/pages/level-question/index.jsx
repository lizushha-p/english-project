import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './index.css'

class LevelQuestion extends Component{
  render(){
    return(
      <div className='wrapperLevelQuestion'>
        <h1 className='questionLevel'>Какой у вас уровень?</h1>
        <h3 className='reasonQuestion'>- Мы хотим определить ваш уровень английского, чтобы направить вас в нужную часть курса</h3>
        <Button className='buttonGoTest' variant="outlined">Перейти к тесту</Button>
      </div>
    )
  }
}

export default LevelQuestion