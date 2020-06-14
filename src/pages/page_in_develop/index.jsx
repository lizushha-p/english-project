import React, { Component } from 'react'
import { ReactComponent as NotExistPicture} from './assets/not_exist.svg'
import './index.css'

class PageInDevelop extends Component{
  render(){
    return(
        <div className='wrapperPageInDevelop'>
          <h1>Сожалеем...</h1>
          <div>
            <NotExistPicture/>
            <NotExistPicture style={{margin:'0 40px'}}/>
            <NotExistPicture/>
          </div>
          <p>Ваш курс находится в разработке</p>
          <div>
            <button className='returnOnMainPage'><a href='/about'>Перейти на главную страницу</a></button>
            <button className='returnOnMainPage'><a href='/course'>Изучить курс А2</a></button>
          </div>
        </div>  
    )
  }
}

export default PageInDevelop