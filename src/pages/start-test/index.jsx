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
import Loader from '../../component/loader/index'
import { getQuizes, fetchQuizes } from '../../modules/quiz';
import onePicture from './assets/image1.svg';
import twoPicture from './assets/image2.svg';
import threePicture from './assets/image3.svg';
import fourPicture from './assets/image4.svg';
import fivePicture from './assets/image5.svg';
import sixPicture from './assets/image6.svg';
import sevenPicture from './assets/image7.svg';
import eightPicture from './assets/image8.svg';
import resultPicture from './assets/image9.svg'
import { getStartLevel } from './start-test-utils';
import {NavLink} from 'react-router-dom'
import './index.css'

class StartTestController extends Component {
  state = {
    result: 0,
    activeAnswer: 0,
    activeQuestion: 0,
    images: [onePicture, twoPicture, threePicture, fourPicture, fivePicture, sixPicture, sevenPicture, eightPicture],
    resultImage: resultPicture,
    level: 0
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  onClickNextQuestion = () => {
    this.setState({
      ...this.state,
      activeQuestion: this.state.activeQuestion+1,
      result: this.state.activeAnswer === this.props.quizes[this.state.activeQuestion].rightAnswer
        ? this.state.result + 1 : this.state.result,
      level: (this.state.result>=1)&&(this.state.result<=7) ? 'A2': this.state.result>7&&this.state.result<=16 ? 'B1':'B2',
      link: (this.state.level==='A2'? '/course':'/error-exist-course')
    })
  }

  onClickAnswerHandler = (event) => {
    this.setState({
      activeAnswer: event.target.value,
    })
  }

  random = (min,max) => {
    return Math.floor(Math.random()*(max - min) + min);
  }

  get getEnglishLevel () {
    return getStartLevel(this.state.result);
  }

  render(){
    if (isEmpty(this.props.quizes)) {
      return <Loader/>
    }

    return (
      this.state.activeQuestion <= 24 ?
      <div className='wrapperStartTest'>
        <img src={this.state.images[this.random(0,this.state.images.length-1)]} alt='fff'style = {{marginBottom:'30px', paddingTop:'30px'}}/>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{fontSize:'25px',margin:'0px 200px',marginBottom: '25px',color:'black'}}>
          {this.state.activeQuestion + 1 + '.'} {this.props.quizes[this.state.activeQuestion].question}
          </FormLabel>
          <RadioGroup aria-label="answer" name="gender1" style={{fontSize:'18px',marginBottom: '30px', padding:'5px 10px'}}>
            {this.props.quizes[this.state.activeQuestion].answers.map((answer, index) => (
              <FormControlLabel
                key={index}
                value={answer.text}
                control={<Radio />}
                label={answer.text}
                onClick={this.onClickAnswerHandler}
                style={{margin:'0px 200px'}}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          onClick={this.onClickNextQuestion}
          style={{background:'#5E2DE7', color:'white', fontWeight:'bold', marginBottom: '30px'}}
        >
           Следующий вопрос
        </Button>
      </div> :
      <div className='resultMainTest'>
        <div>
          <img src={this.state.resultImage} alt='fff' style={{marginTop:'40px',marginLeft:'80px'}}/>
        </div>
        <div className='rightpartResultMainTest'>
          <h1 style={{fontSize:'35px'}}>Bаш результат: <span style={{color:'#5E2DE7', fontSize:'30px'}}>{this.state.result}</span></h1>
          <p style={{fontSize:'25px',marginTop:'10px'}}>
          Вы владеете знаниями для <br/> повседневного общения в <br/> медленном темпе,  обмена <br/> простой информации. <br/>
          Мы подобрали задания <br/>соответсвующие уровню - <span style={{color:'#FF5252', fontSize:'23px'}}>{this.getEnglishLevel}</span>.
          </p>
          <Button
            className='goToCourse'
            variant="contained"
            style={{background:'#5E2DE7', fontWeight:'bold', color:'white',marginTop:'40px'}}
          >
              <NavLink to={this.state.link}>Перейти к курсу</NavLink>
          </Button>
        </div>
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
