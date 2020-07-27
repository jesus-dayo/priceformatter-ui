import React from 'react'
import priceFormatStyle from '../../../assets/jss/priceFormatStyle.js';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {useRecoilValue} from 'recoil/dist';
import {displayResults} from '../PriceFormatter';

const useStyles = makeStyles(priceFormatStyle);

const PriceDisplay = () => {
  const classes = useStyles();
  const display = useRecoilValue(displayResults);
  return (<div>
    <Card className={classes.card}>
      <CardHeader
        title="Display"
        className={classes.cardHeaderDisplay}
      />
      <CardContent>
        <Grid container className={classes.displayContainer}>
          <Grid item md={12} sm={12} xs={12} >

            <span className={classes.dpl}>
              <sub className={classes.bigFigure}>
                {display.bigFigure}
              </sub>{display.dealingPrice}<sup className={classes.fpl}>
                {display.fractionalPips}
              </sup>
            </span>

          </Grid>
        </Grid>
      </CardContent>
    </Card></div>)
}

export default PriceDisplay;
