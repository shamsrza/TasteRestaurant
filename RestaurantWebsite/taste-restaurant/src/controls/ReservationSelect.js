import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText, makeStyles } from '@material-ui/core';


  const useStyles = makeStyles(theme => ({
    root: {
        '& label': {
            fontSize: 12,
            color: "black",
            fontWeight: 700
          },
          '& .MuiSelect-root': {
            fontSize: '15px',
          }
    }
}))


export default function ReservationSelect(props) {

    const classes = useStyles();

    const { name, label, value, varient, onChange, options, error = null } = props;

    return (
        <FormControl
            size="small"
            className={classes.root}
            variant={varient || "outlined"}
            {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                style={{textAlign: "left"}}
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id} style={{fontSize: '1em'}}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText style= {{fontSize: '13px'}}>{error}</FormHelperText>}
        </FormControl>
    )
}