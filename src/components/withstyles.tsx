import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const MyTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    border: 'none', // Remove the default border
  },
});

class MyComponent extends Component {
  render() {
    return <MyTextField label="Label" />;
  }
}

export default MyComponent;
