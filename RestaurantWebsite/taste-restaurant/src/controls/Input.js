import React from 'react'
import { TextField , makeStyles, InputLabel } from '@material-ui/core';

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

    const { name, label, value, variant, onChange, error = null, ...other } = props;
    return (
        <TextField
        className={classes.root}
            inputProps={{style: {fontSize: 15}}}
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}