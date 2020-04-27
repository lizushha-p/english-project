import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import { ReactComponent as SignPicture} from './assets/sign-in.svg'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { FInput } from '../../component/inputs/input';
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
          <Formik
            initialValues={{
              login: '',
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
          <div className='wrapperformEnter'>
            <div className='titleSignIn'>Вход</div>
              <Form>
                <FInput
                  className='inputSignIn'
                  label="Логин"
                  variant='filled'
                  name="login"
                />
                <FInput
                  className='inputSignIn'
                  label="Пароль"
                  variant='filled'
                  name="password"
                />
                <Button
                  className='buttonSignIn'
                  variant="contained"
                  endIcon={<Icon>send</Icon>}
                  type="submit"
                >
                  Готово
                </Button>
              </Form>
          </div>
          </Formik>
        </div>
      </Page>
    )
  }
}

export default SignIn
