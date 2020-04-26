import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

class Header extends Component{
 render(){
   return(
    <div className='navigationBar'>
        <ul className='menuElementsLeft'>
          <li>
            <NavLink to='/'>О сайте</NavLink>
          </li>
        </ul>

          <ul className='menuElementsRight'>
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