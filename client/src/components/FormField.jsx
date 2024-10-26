// src/components/FormField.jsx
import React from 'react';
import { TextField } from '@mui/material';

const FormField = ({ label, name, value, onChange, type = "text", multiline = false, rows = 1, InputLabelProps = {} }) => (
  <TextField
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    fullWidth
    margin="normal"
    multiline={multiline}
    rows={rows}
    InputLabelProps={InputLabelProps}
    className='outline-none border-none'
  />
);

export default FormField;
