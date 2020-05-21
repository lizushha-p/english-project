import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { ReactComponent as LogoPicture} from './assets/logo.svg'
import './index.css'

class Header extends Component{
 render(){
   return(
    <div className='navigationBar'>
          <LogoPicture className='logoPicture'/>
          <ul className='menuElements'>
            <li>
              <NavLink to='/about'>О сайте</NavLink>
            </li>
            <li>
              <NavLink to='/sign-up'>Регистрация</NavLink>
            </li>
            <li>
              <NavLink to='/sign-in'>Вход</NavLink>
            </li>
          </ul>
    </div>
   )
 }
}

export default Header