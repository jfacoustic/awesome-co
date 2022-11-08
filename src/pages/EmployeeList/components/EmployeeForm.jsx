import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const EmployeeForm = ({ cancel }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    position: '',
    email: ''
  })
  return <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
    <TextField label="First Name" />
    <TextField label="Last Name" />
    <TextField label="Position" />
    <TextField label="Email" />
    <Button onClick={() => { }}>Save</Button>
    <Button onClick={cancel}>Cancel</Button>
  </div>
}

export default EmployeeForm;