import React, { Component } from 'react'
import Header from '../../component/page/index'
import Background from '../../component/background/index'
import './index.css'

class Main extends Component{
  render(){
    return(
      <div>
        <Header isShow = 'true'/>
        <Background><h1 className='back'>Увлекательный, эффективный и бесплатный сервис для изучения английского языка</h1></Background>
      </div>
    )
  }
}

export default Main