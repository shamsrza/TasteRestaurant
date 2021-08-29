import React, {useState} from 'react'
import { TextField , makeStyles, InputLabel, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
          '& .MuiInputLabel-root': {
            fontSize: 16,
            color: "black",
            fontWeight: 700,
            marginRight: 15
          }
    }
}))


export default function Input(props) {
    const classes = useStyles();
    //const [values, setValues] = useState('');

    const { name, label, value, variant, onChange, error = null, ...other } = props;

    
    return (
        <TextField
            className={classes.root}
            inputProps={{style: {fontSize: "15px"}}}
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            //onChange={(e) =>{setAddressValue(e.target.value)}}
            {...other}
            {...(error && { error: true, helperText: <div style={{fontSize: '13px'}}>{error}</div> })}
        />
    )
}