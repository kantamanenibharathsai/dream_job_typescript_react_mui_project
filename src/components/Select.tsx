import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function MySelect() {
  // Set your default value here
  const defaultValue = 'Option 2';

  return (
    <FormControl>
      <InputLabel>Choose an option</InputLabel>
      <Select
        defaultValue={defaultValue} // Set the default value
      >
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}

export default MySelect;