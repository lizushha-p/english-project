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
              <NavLink to='/' className='navLink_main'>О сайте</NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' className='navLink_main'>Регистрация</NavLink>
            </li>
            <li>
              <NavLink to='/sign-in' className='navLink_main'>Вход</NavLink>
            </li>
          </ul>
    </div>
   )
 }
}

export default Header