import * as React from 'react'
import { TextField } from '@material-ui/core';
import { Field } from 'formik';

const MyInput = ({field, form, ...props}) => {
  return <TextField {...field} {...props} />;
};

export const FInput = React.memo(({field, form, ...props}) => (
  <Field {...field} {...props} component={MyInput} />
));
