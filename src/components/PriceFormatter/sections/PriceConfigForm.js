import React, {useReducer, useState} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {CardActions} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import NumberFormat from 'react-number-format';
import priceFormatStyle from '../../../assets/jss/priceFormatStyle.js';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import api from '../../../api';
import {TRAIL_ZERO, TRIM_ZERO} from '../../../common/common';
import {useSetRecoilState} from 'recoil';
import {displayResults} from '../PriceFormatter';

const useStyles = makeStyles(priceFormatStyle);

const initialState = {
  'displayFormat': '0',
  'dpl': null,
  'fpl': null,
  'scale': null
};

const reducer = (state, { field, value}) => {
  return {
    ...state,
    [field]: value,
  };
};

const PriceConfigForm = () => {
  const classes = useStyles();
  const [config, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [price, setPrice] = useState();
  const [stringFormat, setStringFormat] = useState(TRAIL_ZERO);
  const setDisplayResults = useSetRecoilState(displayResults);

  const handleChange = (name, value) => {
    dispatch({ field: name, value: value });
  };

  const handlePrice = (value) => {
    setPrice(value);
  };

  const handleChangeStringFormat = (e) => {
    setStringFormat(e.target.value);
  }

  const handleSubmit = async () => {
    switch(stringFormat){
      case TRAIL_ZERO:
        api.formatter.formatZero({config: {...config}, price: price})
          .then((response)=>{
            setDisplayResults(response.data);
          }).catch(e=>alert(e));
        break;
      case TRIM_ZERO:
        api.formatter.formatTrimZero({config: {...config}, price: price})
          .then((response)=>{
            setDisplayResults(response.data);
          }).catch(e=>alert(e));
        break;
      default:
        console.log('String Format not available');
        break;
    }
  }

  return (<div>
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        subheader="Complete details below"
        title="Price Configuration"
      />
      <CardContent>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">String Format</FormLabel>
              <RadioGroup
                aria-label="stringFormat"
                name="stringFormat"
                onChange={handleChangeStringFormat}
                row
                value={stringFormat}
              >
                <FormControlLabel control={<Radio />} label="Trailing Zero" value={TRAIL_ZERO}/>
                <FormControlLabel control={<Radio />} label="Trim Zero" value={TRIM_ZERO} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Display Format</FormLabel>
              <RadioGroup
                aria-label="displayFormat"
                name="displayFormat"
                onChange={(e)=>handleChange('displayFormat', e.target.value)}
                row
                value={config.displayFormat}
              >
                <FormControlLabel control={<Radio />} label="Decimal" value="0" />
                <FormControlLabel control={<Radio />} label="Percentage" value="1" />
                <FormControlLabel control={<Radio />} label="Per mile" value="2" />
                <FormControlLabel control={<Radio />} label="Basis Point" value="3" />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
              <NumberFormat
                customInput={TextField}
                onValueChange={(numberFormat) =>
                  handleChange('dpl', numberFormat.value)
                }
                placeholder="Dealing Price Length"
                value={config.dpl}
              />
            </FormControl>
            <FormControl fullWidth>
              <NumberFormat
                customInput={TextField}
                name="fpl"
                onValueChange={(numberFormat) =>
                  handleChange('fpl', numberFormat.value)
                }
                placeholder="Fractional Pip Length"
                value={config.fpl}
              />
            </FormControl>
            <FormControl fullWidth>
              <NumberFormat
                customInput={TextField}
                name="scale"
                onValueChange={(numberFormat) =>
                  handleChange('scale', numberFormat.value)
                }
                placeholder="Scale"
                value={config.scale}
              />
            </FormControl>
            <FormControl fullWidth>
              <NumberFormat
                customInput={TextField}
                name="price"
                onValueChange={(numberFormat) =>
                  handlePrice(numberFormat.value)
                }
                placeholder="Price"
                value={price}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.action}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
        Display Format
        </Button>
      </CardActions>
    </Card></div>)
}

export default PriceConfigForm;
