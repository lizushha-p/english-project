import React, { Component } from 'react'
import { ReactComponent as SignPicture} from './assets/sign-in.svg'
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
          <div>
            <SignPicture className='imageSignIn'/>
          </div>
          <div className='wrapperformEnter'>
            <div className='titleSignIn'>Вход</div>
            <div>
              <TextField className='inputSignIn' id="filled-basic" label="Логин" variant="filled" />
              <TextField className='inputSignIn' id="filled-basic" label="Пароль" variant="filled" />
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