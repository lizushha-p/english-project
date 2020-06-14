import { FInput } from '../../component/inputs/input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Form } from 'formik';
import React from 'react';
import './index.css';

export const SignUpForm = ({errors, isButtonDisabled, hasError}) => (
  <Form>
    <div className='wrapperformRegistaration'>
      <div className='titleSignUp'>Регистрация</div>
      <div>
        <FInput
          className='inputSignUp'
          label="Логин"
          name="login"
          variant="filled"
          required
        />
        <FInput
          className='inputSignUp'
          label="Имя"
          name="firstName"
          variant="filled"
          required
        />
        <FInput
          className='inputSignUp'
          name="lastName"
          label="Фамилия"
          variant="filled"
          required
        />
        <FInput
          className='inputSignUp'
          id="filled-basic"
          name="email"
          label="Эл. почта"
          variant="filled"
          required
          error={errors.email}
        />
        {hasError && <span className={'error'}>{hasError}</span>}
        <FInput
          className='inputSignUp'
          type="password"
          label="Пароль"
          name="password"
          variant="filled"
          required
          error={errors.password}
        />
      </div>
      <div>
        <Button
          className='buttonSignUp'
          variant="contained"
          endIcon={<Icon>send</Icon>}
          type="submit"
          disabled={isButtonDisabled}
        >
          Готово
        </Button>
      </div>
    </div>
  </Form>
);
