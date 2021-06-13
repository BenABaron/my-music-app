import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  },
});

function valuetext(value) {
  return `${value}°C`;
}

function currentVal(value) {
  return value;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Volume
      </Typography>
      <Slider
        defaultValue={props.volume}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </div>
  );
}
