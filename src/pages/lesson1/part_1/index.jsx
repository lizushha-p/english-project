import React, { Component } from 'react'
import { ReactComponent as ImageFriendRequest} from './assets/friendreq.svg'
import { ReactComponent as ImageClose} from './assets/close.svg'
import { ReactComponent as ImageNext} from './assets/next.svg'
import { ReactComponent as ImageDialog} from './assets/dialog-block.svg'
import { ReactComponent as ImageQuestion1} from './assets/question1.svg'
import { ReactComponent as ImageRule} from './assets/rules.svg'
import { ReactComponent as ImageDialog2} from './assets/dialog3.svg'
import { ReactComponent as ImageQuestion2} from './assets/question2.svg'
import { ReactComponent as ImageQuestion3} from './assets/question3.svg'
import { ReactComponent as ImageQuestion4} from './assets/question4.svg'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'
import './index.css'

class Part1 extends Component{
  state={
    question1:{
      answer1:'I play the saxophone',
      answer2:'I play on saxophone',
      answer3:'I play on the saxophone',
      rightAnswer:'I play the saxophone'
    }
  }

  render(){
    return(
      <div>

        <div>
          <div className='part1_welcome'>
            <button><a href='/course'><ImageClose /></a></button>
            <ImageFriendRequest />
          </div>
          <h1 style={{fontSize: '60px',margin:'0 200px', marginTop:'80px'}}>A Friend Request</h1>
          <p style={{fontSize: '30px', margin:'0 180px', marginTop:'15px', marginBottom:'80px'}}>
          -  In this lesson, you will learn how to introduce yourself,   		
          ask questions, and reply to questions about yourself. You     		
          will also learn how to avoid three very common mistakes 		
          in English.
          </p>
          <div className='part1_next'>
            <button><a href='#exercise_1'><ImageNext /></a></button>
          </div>
        </div>

        <div className='dialog_block' id='exercise_1'>
          <button><a href='/course'><ImageClose /></a></button>
          <ImageDialog/>
          <div className='part2_next'>
            <button><a href='#exercise_2'><ImageNext /></a></button>
          </div>
        </div>

        <div id='exercise_2' style={{height:'100vh', display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <ImageQuestion1 style={{marginTop:'20px'}}/>
          <div className='answer_on_question1'>
            <button>{this.state.question1.answer1}</button>
            <button>{this.state.question1.answer2}</button>
            <button>{this.state.question1.answer3}</button>
          </div>
          <div className='part3_next'>
            <button><a href='#exercise_3'><ImageNext /></a></button>
          </div>
        </div>

        <div id='exercise_3' style={{height:'100vh', display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <ImageRule />
          <div className='part4_next'>
            <button><a href='#exercise_4'><ImageNext /></a></button>
          </div>
        </div>

        <div id='exercise_4' style={{height:' 550px', paddingTop:'90px'}}>
          <ImageDialog2 /> 
          <div className='part5_next'>
            <button><a href='#exercise_5'><ImageNext /></a></button>
          </div>
        </div>

        <div id='exercise_5' style={{height:'100vh', display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <span style={{color:'#C6C6C6', fontSize:'30px'}}>Выберете все праивльные ответы</span>
          <ImageQuestion2 style={{marginTop:'20px'}}/>
          <div className='answer_on_question2'>
            <button>Kate works in marketing</button>
            <button>Kate and Greg like jazz</button>
            <button>Kate likes Greg's mug</button>
          </div>
          <div className='part6_next'>
            <button><a href='#exercise_6'><ImageNext /></a></button>
          </div>
        </div>

        <div id='exercise_6'>
          <h1 style={{fontSize: '60px',margin:'0 180px', marginTop:'20px'}}>Greeting and Asking <br/>Question</h1>
          <p style={{fontSize: '30px', margin:'0 180px', marginTop:'15px', marginBottom:'30px'}}>
          -  Let’s review some phrases to greet people and ask questions.
          </p>
          <ImageQuestion3 style={{marginTop:'10px', marginLeft:'170px'}}/>
          <div className='question3' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button>Have a good day</button>
            <button>Nice to meet you</button>
            <button>You too. Bye!</button>
          </div>
          <div className='answer_on_question3' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button>Приятно познакомиться</button>
            <button>Хорошего дня</button>
            <button>И тебе. Пока!</button>
          </div>
        </div>

        <div id='exercise_7'>
          <ImageQuestion4 style={{marginTop:'50px', marginLeft:'260px', marginBottom:'50px'}}/><br/>
          <div style={{display:'flex',flexDirection:'column', justifyContent:'center', marginLeft:'375px', height: '70px'}}>
            <span>"What do you <input style={{width:'30px'}}/> here?"</span>
            <p>"I am an accountant."</p>
            <p style={{marginTop:'0px'}}>"Me too!"</p>
          </div>
        </div>

        <div id='exercise_8'>
          <ImageQuestion4 style={{marginTop:'50px', marginLeft:'260px', marginBottom:'50px'}}/><br/>
          <div style={{display:'flex',flexDirection:'column', justifyContent:'center', marginLeft:'375px', height: '70px'}}>
            <span>"Where <input style={{width:'30px'}}/> you <input style={{width:'30px'}}/> ?"</span>
            <p>"I am from California."</p>
          </div>
        </div>

        <div id='exercise_9'>
          <ImageQuestion4 style={{marginTop:'50px', marginLeft:'260px', marginBottom:'50px'}}/><br/>
          <div style={{display:'flex',flexDirection:'column', justifyContent:'center', marginLeft:'375px', height: '70px'}}>
            <span>"Have a good day!"</span>
            <p>"You <input style={{width:'30px'}}/>! Bye!"</p>
          </div>
        </div>

        <div>
          <Button
            className='buttonComplete'
            variant="contained"
            type="submit"
            >
            <NavLink to='/course'>Complete this chapter!</NavLink>
          </Button>
        </div>
        
    </div>
    )
  }
}

export default Part1