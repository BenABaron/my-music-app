import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import QualitySelector from './CardComponents/QualitySelector'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Sound Quality
        </Typography>
        <Typography variant="body2" component="p">
          select your quality of sound.
        </Typography>
      </CardContent>
      <CardActions>
        <QualitySelector setQuality={props.setQuality.bind(this)} quality={props.quality}/>
      </CardActions>
    </Card>
  );
}
