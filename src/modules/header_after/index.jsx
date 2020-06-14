import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { ReactComponent as LogoPicture} from './assets/logo.svg'
import './index.css'

class HeaderAfter extends Component{
 render(){
   return(
    <div className='navigationBar_after'>
          <LogoPicture className='logoPicture'/>
          <ul className='menuElements'>
            <li>
            <NavLink to='/course' className='navLink_main'>Курс</NavLink>
            </li>
            <li>
            <NavLink to='/my-account' className='navLink_main'>Личный кабинет</NavLink>
            </li>
            <li>
            <NavLink to='/sign-in' className='navLink_main'>Выход</NavLink>
            </li>
          </ul>
    </div>
   )
 }
}

export default HeaderAfter