import React from 'react';
import PriceConfigForm from './sections/PriceConfigForm';
import PriceDisplay from './sections/PriceDisplay';
import Grid from '@material-ui/core/Grid';
import {atom} from 'recoil';

export const displayResults = atom({
  key: 'displayResults',
  default: {
    'bigFigure': '',
    'dealingPrice': '',
    'fractionalPips': ''
  },
});

const PriceFormatter = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={8} sm={12}>
        <PriceConfigForm/>
      </Grid>
      <Grid item md={4} sm={12}>
        <PriceDisplay/>
      </Grid>
    </Grid>)
}

export default PriceFormatter;
