import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LaptopIcon from '@material-ui/icons/Laptop';
import TvIcon from '@material-ui/icons/Tv';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Grid from '@material-ui/core/Grid';
import { ToggleButton } from '@mui/lab';
import {ToggleButtonGroup} from '@mui/lab';
import {useState} from 'react';
import cambiarAncho1 from '../pages/index'
import cambiarAncho2 from '../pages/index'
import cambiarAncho3 from '../pages/index'

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));



export const  ToggleButtonNotEmpty=()=> {
  
   
  
  

  
  
  
  
  
  
  
     
   
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['phone']);

  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  
  const classes = useStyles();
  
  

  return (




<Grid container spacing={2}>
 <Grid item sm={12} md={6}>
<div className={classes.toggleContainer}>
</div>
</Grid>
<Grid item sm={12} md={6}>
<div className={classes.toggleContainer}>
 <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="device">
<ToggleButton value="laptop" aria-label="laptop">
          
<LaptopIcon 
            onClick=
            {(e)=> cambiarAncho1()} />
            </ToggleButton >
            <ToggleButton value="tv" aria-label="tv">
              <TvIcon
              onClick=
              {(e)=> cambiarAncho2()} 
              />
            </ToggleButton>
            <ToggleButton value="phone" aria-label="phone">
              <PhoneAndroidIcon  
              onClick=
              {(e)=> cambiarAncho3()}/>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        </Grid>
    </Grid>
  );
}
