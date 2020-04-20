import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ReactComponent as SignPicture} from './assets/sign-up.svg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Page from '../../component/page/index'
import { signUpUser } from './sign-up-actions';
import './index.css'

class SignUpController extends Component{
  state={
    email: '',
    password: '',
    login: '',
    firstName:'',
    lastName:'',
    emailError: 'Неверный email',
    passwordError: 'пароль должен быть >=6 символов',
  }

  onEmailChangeHandler = (event) => {
    this.setState({
      ...this.state,
      email: event.target.value,
      emailError: event.target.value.includes('@') && event.target.value.includes('.') ? undefined : 'Неверный email',
    })
  }

  onPasswordChangeHanlder = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value,
      passwordError: event.target.value.length >=6 ? undefined : 'пароль должен быть >=6 символов',
    })
  }

  onSubmitClickHandler = () => {
    this.props.signUpUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
    });
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
                onChange={this.onLoginChangeHanlder}
                required
              />
              <TextField
                className='inputSignUp'
                label="Имя"
                variant="filled"
                value={this.state.firstName}
                onChange={this.onFirstNameChangeHanlder}
                required
              />
              <TextField
                className='inputSignUp'
                label="Фамилия"
                variant="filled"
                value={this.state.lastName}
                onChange={this.onLastNameChangeHanlder}
                required
              />
              <TextField
                className='inputSignUp'
                id="filled-basic"
                label="Эл. почта"
                variant="filled"
                value={this.state.email}
                onChange={this.onEmailChangeHandler}
                required
                error={this.state.emailError}
              />
              <TextField
                className='inputSignUp'
                label="Пароль"
                variant="filled"
                value={this.state.password}
                onChange={this.onPasswordChangeHanlder}
                required
                error={this.state.passwordError}
              />
            </div>
            <div>
              <Button
                className='buttonSignUp'
                variant="contained"
                endIcon={<Icon>send</Icon>}
                onClick={this.onSubmitClickHandler}
                disabled={this.state.passwordError || this.state.emailError}
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

const mapDispatchToProps = {
  signUpUser,
}

const SignUp = connect(null, mapDispatchToProps)(SignUpController);

export default SignUp
