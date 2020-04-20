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
  componentDidMount() {
    this.props.fetchQuizes();
  }

  render(){
    console.log(this.props);
    if (isEmpty(this.props.quizes)) {
      return <h1>Loading!!!)))</h1>
    }
    return (
      <div className='wrapperStartTest'>
        <FormControl component="fieldset">
          <FormLabel component="legend">

          </FormLabel>
          <RadioGroup aria-label="answer" name="gender1">
            <FormControlLabel
              value={this.props.quizes[0].answers[0].text}
              control={<Radio />}
              label={this.props.quizes[0].answers[0].text}
            />
            <FormControlLabel
              value={this.props.quizes[0].answers[1].text}
              control={<Radio />}
              label={this.props.quizes[0].answers[1].text}
            />
            <FormControlLabel
              value={this.props.quizes[0].answers[2].text}
              control={<Radio />}
              label={this.props.quizes[0].answers[2].text}
            />
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

const mapStateToProps = createStructuredSelector({
  quizes: getQuizes,
})

const mapDispatchToProps = {
  fetchQuizes,
}

const StartTest = connect(mapStateToProps, mapDispatchToProps)(StartTestController);

export default StartTest;
