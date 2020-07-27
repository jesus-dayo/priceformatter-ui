import React from 'react';
import PriceConfigForm from './sections/PriceConfigForm';
import PriceDisplay from './sections/PriceDisplay';
import Grid from '@material-ui/core/Grid';

const PriceFormatter = () => {
  return (
    <Grid container>
      <Grid item md={8} sm={12}>
        <PriceConfigForm/>
      </Grid>
      <Grid item md={4} sm={12}>
        <PriceDisplay/>
      </Grid>
    </Grid>)
}

export default PriceFormatter;
