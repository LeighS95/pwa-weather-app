import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    maxWidth: 345,
  },
  media: {
    height: 85,
    background: 'no-repeat center center',
    width: '100%'
  },
});

const Weather = ({ data }) => {
  const classes = useStyles();

  console.log(data)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          title={data.weather[0].description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}<sup style={{marginLeft: '4px', height: '50%', padding: '2px 4px', backgroundColor: 'orange', borderRadius: '4px'}}>{data.sys.country}</sup>
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h3">
            <span>{data.main.temp}<sup>&deg;</sup>C</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Weather;