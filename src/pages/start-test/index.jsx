import React, { Component } from 'react'
import { connect } from 'react-redux';
import { isEmpty } from 'lodash'
import { createStructuredSelector } from 'reselect';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { getQuizes, fetchQuizes } from '../../modules/quiz';
import './index.css'

class StartTestController extends Component {
  state = {
    result: 0,
    activeQuestion: 0,
    activeAnswer: 0,
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  onClickNextQuestion = () => {
    this.setState({
      ...this.state,
      activeQuestion: this.state.activeQuestion+1,
      result: this.state.activeAnswer === this.props.quizes[this.state.activeQuestion].rightAnswer
        ? this.state.result + 1 : this.state.result
    })
  }

  onClickAnswerHandler = (event) => {
    this.setState({
      activeAnswer: event.target.value,
    })
  }

  render(){
    if (isEmpty(this.props.quizes)) {
      return <h1>Loading!!!))</h1>
    }

    return (
      this.state.activeQuestion <= 24 ?
      <div className='wrapperStartTest'>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {this.props.quizes[this.state.activeQuestion].question}
          </FormLabel>
          <RadioGroup aria-label="answer" name="gender1">
            {this.props.quizes[this.state.activeQuestion].answers.map((answer, index) => (
              <FormControlLabel
                key={index}
                value={answer.text}
                control={<Radio />}
                label={answer.text}
                onClick={this.onClickAnswerHandler}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          onClick={this.onClickNextQuestion}
        >
           Следующий вопрос
        </Button>
      </div> :
      <div>
        <h1>ваш результат: {this.state.result}</h1>
        <Button
          variant="contained"
        >
           Перейти к курсу
        </Button>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  quizes: getQuizes,
})

const mapDispatchToProps = {
  fetchQuizes,
}

const StartTest = connect(mapStateToProps, mapDispatchToProps)(StartTestController);

export default StartTest;
