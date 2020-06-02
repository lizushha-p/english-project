import React, { Component } from 'react'
import { ReactComponent as ImageFriendRequest} from './assets/friendreq.svg'
import { ReactComponent as ImageClose} from './assets/close.svg'
import { ReactComponent as ImageNext} from './assets/next.svg'
import { ReactComponent as ImageDialog} from './assets/dialog-block.svg'
import { ReactComponent as ImageQuestion1} from './assets/question1.svg'
import { ReactComponent as ImageRule} from './assets/rule.svg'
import './index.css'

class Part1 extends Component{
  render(){
    return(
      <div>

        <div>
          <div className='part1_welcome'>
            <button><a href='/course'><ImageClose /></a></button>
            <ImageFriendRequest />
          </div>
          <h1 style={{fontSize: '60px',margin:'0 180px', marginTop:'35px'}}>A Friend Request</h1>
          <p style={{fontSize: '30px', margin:'0 180px', marginTop:'15px', marginBottom:'30px'}}>
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
            <button>I play the saxophone</button>
            <button>I play on saxophone</button>
            <button>I play on the saxophone</button>
          </div>
          <div className='part3_next'>
            <button><a href='#exercise_3'><ImageNext /></a></button>
          </div>
        </div>

        <div id='exercise_3' style={{height:'90vh'}}>
          <ImageRule />
          <div className='part4_next'>
            <button><a href='#exercise_4'><ImageNext /></a></button>
          </div>
        </div>

        <div id='exercise_4' style={{height:'90vh'}}>
          <ImageRule />
          <div className='part4_next'>
            <button><a href='#exercise_4'><ImageNext /></a></button>
          </div>
        </div>
    </div>
    )
  }
}

export default Part1