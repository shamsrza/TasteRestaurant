import React, {useState} from 'react'
import { TextField , makeStyles, InputLabel, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
          '& .MuiInputLabel-root': {
            //fontSize: 14,
            // size:"normal",
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


export default function Input(props) {
    const classes = useStyles();
    
    let input = "";

    const { name, label, value, variant, onChange, error = null, ...other } = props;
    
    return (
        <TextField
        size="normal"
        id="outlined-size-normal"
        className={classes.root}
        inputProps={{style: {fontSize: 15}}}
        InputLabelProps={{style: {fontSize: 15}}}
        variant={variant || "outlined"}
        label={label}
        name={name}
        value= {value}
        onChange={onChange}
        {...other}
        {...(error && { error: true, helperText: <div style={{fontSize: '13px'}}>{error}</div> })}
        />
    )
}