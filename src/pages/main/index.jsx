import React, { Component } from 'react'
import Header from '../../component/page/index'
import { ReactComponent as RightPicture} from './assets/main.svg'
import { ReactComponent as AppleDown} from './assets/apple-down.svg'
import { ReactComponent as GoogleDown} from './assets/google-down.svg'
import './index.css'

class Main extends Component{
  render(){
    return(
      <div>
        <Header isShow = 'true'/>
        <div className='startPage'>
          <div className='leftPartMainPage'>
            <p>Наверное, лучшее место</p>
            <span className='PartSentences'>Ты</span><span className='SecondPartSentences'> - следующий, кто заговорит   на английском языке</span>
            <div className='AppleGoogleIcon'>
              <GoogleDown style={{height:'54px', width:'160px'}} className='google'/>
              <AppleDown style={{height:'54px', width:'160px'}} className='apple'/>
            </div>
          </div>
          <div className='rightPartMainPage'>
            <RightPicture/>
          </div>
        </div>
      </div>
    )
  }
}

export default Main