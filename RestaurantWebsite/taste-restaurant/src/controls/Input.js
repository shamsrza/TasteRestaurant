import React from 'react'
import { TextField , makeStyles} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
        fontSize: "20px"
    }
}))

export default function Input(props) {
    const classes = useStyles();

    const { name, label, value, variant, onChange, error = null, ...other } = props;
    return (
        <TextField
            className={classes.root}
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