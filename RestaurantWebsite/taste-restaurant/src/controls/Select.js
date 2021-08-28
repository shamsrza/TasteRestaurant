import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText, makeStyles } from '@material-ui/core';


  const useStyles = makeStyles(theme => ({
    root: {
        '& label': {
            fontSize: '16px',
            color: "black",
            fontWeight: 700
          },
          '& .MuiSelect-root': {
            fontSize: '15px ',
          }
    }
}))


export default function Select(props) {

    const classes = useStyles();

    const { name, label, value, varient, onChange, options, error = null } = props;

    return (
        <FormControl
            className={classes.root}
            inputProps={{style: {fontSize: 15}}}
            variant={varient || "outlined"}
            {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}