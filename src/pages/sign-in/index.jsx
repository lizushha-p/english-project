import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import {ReactComponent as Enter} from './assets/enter.svg'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { loginByEmailAndPassword } from '../../modules/auth';
import { FInput } from '../../component/inputs/input';
import Page from '../../component/page/index'
import './index.css'

class SignIn extends Component{
  render(){
    return(
      <Page isShow>
        <div className='wrapperSignIn'>
          <Enter style = {{paddingTop:'120px'}}/>
          <Formik
            initialValues={{
              login: '',
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.props.loginByEmailAndPassword(values.login, values.password);
              console.log(values);
              setSubmitting(false);
            }}
          >
          <div className='wrapperformEnter'>
            <div className='titleSignIn'>Вход</div>
              <Form>
                <div className='wrapperSignInBack'>
                  <FInput
                    className='inputSignIn'
                    label="Логин"
                    variant='filled'
                    name="login"
                    style={{marginTop:'20px'}}
                  />
                  <FInput
                    className='inputSignIn'
                    label="Пароль"
                    variant='filled'
                    type="password"
                    name="password"
                    style={{marginTop:'20px'}}
                  />
                </div>
                <div>
                  <Button
                    className='buttonSignIn'
                    variant="contained"
                    endIcon={<Icon>send</Icon>}
                    type="submit"
                  >
                    Готово
                  </Button>
                </div>
              </Form>
          </div>
          </Formik>
        </div>
      </Page>
    )
  }
}

const mapDispatchToProps = {
  loginByEmailAndPassword,
}

export default connect(null, mapDispatchToProps)(SignIn);
