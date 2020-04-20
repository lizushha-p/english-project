import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import './index.css'

class StartTest extends Component{

  render(){
    return(
      <div className='wrapperStartTest'>
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup aria-label="answer" name="gender1">
            <FormControlLabel value={this.state.quiz[0].answers[0].text} control={<Radio />} label={this.state.quiz[0].answers[0].text} />
            <FormControlLabel value={this.state.quiz[0].answers[1].text}  control={<Radio />} label={this.state.quiz[0].answers[1].text} />
            <FormControlLabel value={this.state.quiz[0].answers[2].text} control={<Radio />} label={this.state.quiz[0].answers[2].text} />
          </RadioGroup>
        </FormControl>
        <Button   
          variant="contained" 
        >
           Следующий вопрос
        </Button>
      </div>
    )
  }
}

export default StartTest