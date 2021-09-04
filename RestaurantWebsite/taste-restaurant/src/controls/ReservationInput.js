import React, {useState} from 'react'
import { TextField , makeStyles, InputLabel, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
          '& .MuiInputLabel-root': {
            color: "black",
            fontWeight: 700,
            //marginRight: 15
          },
        //   '& .MuiInputLabelProps':{
        //       fontSize: 14,
        //       marginRight: 15
        //   }
    }
}))




export default function ReservationInput(props) {
    const classes = useStyles();
    //const [values, setValues] = useState('');

    const { name, label, value, variant, onChange, error = null, ...other } = props;

    
    return (
        <TextField
            size="small"
            id="outlined-size-normal"
            className={classes.root}
            inputProps={{style: {fontSize: 12, textAlign: "left"}}}
            InputLabelProps={{style: {fontSize: 12}}}
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: <div style={{fontSize: '13px'}}>{error}</div> })}
        />
    )
}