import { makeStyles } from '@material-ui/core';
import React from 'react';
import OnlineCard from './Cards/OnlineCard';
import VolumeCard from './Cards/VolumeCard';
import SoundQualityCard from './Cards/SoundQualityCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '50pt'
  }
})

function Dashboard(props) {

  const classes = useStyles();
    return (
      <div className={classes.root}>
        <OnlineCard setOnline={props.setOnline.bind(this)}/>
        <VolumeCard setVolume={props.setVolume.bind(this)} volume={props.volume}/>
        <SoundQualityCard />
      </div>

    );
}

export default Dashboard;