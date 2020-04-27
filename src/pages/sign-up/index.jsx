import React, { Component } from 'react'
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { ReactComponent as SignPicture} from './assets/sign-up.svg'
import { SignUpForm } from './sign-up-form';
import Page from '../../component/page/index'
import { signUpUser } from './sign-up-actions';
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
        <div className='wrapperSignUp'>
          <div>
            <SignPicture className='imageSignUp'/>
          </div>
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
              console.log(errors);
              return errors;
            } }
          >
            {({
              errors,
              isSubmitting,
            }) => ( <SignUpForm isButtonDisabled={!isEmpty(errors)} errors={errors} isSubmitting={isSubmitting} />) }
          </Formik>
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
