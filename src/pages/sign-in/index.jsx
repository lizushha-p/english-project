import React, { Component } from 'react'
import {ReactComponent as Enter} from './assets/enter.svg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Page from '../../component/page/index'
import './index.css'

class SignIn extends Component{
  render(){
    return(
      <Page isShow>
        <div className='wrapperSignIn'>
          < Enter style = {{paddingTop:'120px'}}/>
          <div className='wrapperformEnter'>
            <div className='titleSignIn'>Вход</div>
            <div className='wrapperSignInBack'>
              <TextField className='inputSignIn' id="filled-basic" label="Логин" variant="filled" style={{marginTop:'20px'}}/>
              <TextField className='inputSignIn' id="filled-basic" label="Пароль" variant="filled" style={{marginTop:'20px'}}/>
            </div>
            <div>
              <Button className='buttonSignIn'
                variant="contained"
                endIcon={<Icon>send</Icon>}>
                Готово
              </Button>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default SignIn