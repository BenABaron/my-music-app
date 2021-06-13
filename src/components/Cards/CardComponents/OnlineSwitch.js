import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches(props) {

  return (
    <div>
      <Switch
        onChange={() => props.setOnline()}
        color="primary"
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
