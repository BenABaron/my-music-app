import { makeStyles } from '@material-ui/core';
import React from 'react';
import OnlineCard from './Cards/OnlineCard';
import VolumeCard from './Cards/VolumeCard';
import SoundQualityCard from './Cards/SoundQualityCard';
import SystemNotifications from './SystemNotifications';

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
      <div>
        <div className={classes.root}>
          <OnlineCard setOnline={props.setOnline.bind(this)}/>
          <VolumeCard setVolume={props.setVolume.bind(this)} volume={props.volume}/>
          <SoundQualityCard setQuality={props.setQuality.bind(this)} quality={props.quality}/>
        </div>
        <SystemNotifications notifications={props.notifications}/>
      </div>

    );
}

export default Dashboard;