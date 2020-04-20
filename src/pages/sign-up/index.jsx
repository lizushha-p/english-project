import React, { Component } from 'react'
import { ReactComponent as SignPicture} from './assets/sign-up.svg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { history } from '../../history';
import { baseFirebase, getUserByLocalId } from '../../firebase';
import Page from '../../component/page/index'
import './index.css'

class SignUp extends Component{
  state={
    email: '',
    password: '',
    login: '',
    firstName:'',
    lastName:''
  }

  onEmailChangeHandler = (event) => {
    this.setState({
      ...this.state,
      email: event.target.value
    })
  }

  onPasswordChangeHanlder = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }

  onSubmitClickHandler = async () => {
    const response = await baseFirebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    baseFirebase.database().ref(`users/${response.user.uid}`).set({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      login: this.state.login,
    });
    history.push('/level-question');
  }

  onLoginChangeHanlder = (event) => {
    this.setState({
      ...this.state,
      login: event.target.value
    })
  }

  onFirstNameChangeHanlder = (event) => {
    this.setState({
      ...this.state,
      firstName:event.target.value
    })
  }

  onLastNameChangeHanlder = (event) => {
    this.setState({
      ...this.state,
      lastName:event.target.value
    })
  }
  
  render(){
    return(
      <Page isShow>
        <div className='wrapperSignUp'>
          <div>
            <SignPicture className='imageSignUp'/>
          </div>
          <div className='wrapperformRegistaration'>
            <div className='titleSignUp'>Регистрация</div>
            <div>
              <TextField 
                className='inputSignUp' 
                label="Логин" 
                variant="filled" 
                value={this.state.login}
                onChange={this.onLoginChangeHanlder}/>
              <TextField 
                className='inputSignUp' 
                label="Имя" 
                variant="filled" 
                value={this.state.firstName}
                onChange={this.onFirstNameChangeHanlder}/>
              <TextField 
                className='inputSignUp' 
                label="Фамилия" 
                variant="filled" 
                value={this.state.lastName}
                onChange={this.onLastNameChangeHanlder}/>
              <TextField
                className='inputSignUp'
                id="filled-basic"
                label="Эл. почта"
                variant="filled"
                value={this.state.email}
                onChange={this.onEmailChangeHandler}
              />
              <TextField
                className='inputSignUp'
                label="Пароль"
                variant="filled"
                value={this.state.password}
                onChange={this.onPasswordChangeHanlder}
              />
            </div>
            <div>
              <Button
                className='buttonSignUp'
                variant="contained"
                endIcon={<Icon>send</Icon>}
                onClick={this.onSubmitClickHandler}
              >
                Готово
              </Button>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default SignUp