import React, { Component } from 'react'
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { SignUpForm } from './sign-up-form';
import Page from '../../component/page/index'
import { signUpUser } from './sign-up-actions';
import { ReactComponent as SignUpPicture1} from './assets/sign-up1.svg'
import './index.css'

class SignUpController extends Component{
  onSubmitClickHandler = (values) => {
    this.props.signUpUser({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      login: values.login,
      password: values.password,
    });
  }

  render(){
    return(
      <Page isShow>
        <div className='wrapperPageRegistaration'>
          <SignUpPicture1/>
          <Formik
            initialValues={{
              login: '',
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.onSubmitClickHandler(values);
              setSubmitting(false);
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email.includes('@') && !values.email.includes('.')) {
                errors.email = 'not correct email';
              }
              if (values.password.length < 6) {
                errors.password = 'password should be more than 6 char';
              }
              return errors;
            } }
          >
            {({
              errors,
              isSubmitting,
            }) => ( <SignUpForm hasError={this.props.error} isButtonDisabled={!isEmpty(errors)} errors={errors} isSubmitting={isSubmitting} />) }
          </Formik>
          <SignUpPicture1 style={{transform:'scale(-1,1)'}}/>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
})

const mapDispatchToProps = {
  signUpUser,
}

const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpController);

export default SignUp
