import React, {useState} from 'react'
import Form from "../../layouts/Form"
import {Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton} from "@material-ui/core";
import {Input, Select, Button} from "../../controls";
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReorderIcon from '@material-ui/icons/Reorder';
import {createAPIEndpoint, ENDPOINTS} from '../../api'

const useStyles = makeStyles(theme=>({
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#85bb65',
            fontWeight: 'bolder',
            fontSize: '2em'
        }
    },
    submitButtonGroup: {
        backgroundColor: '#85bb65',
        color: "#000",
        border: "none",
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: "none",
            fontSize: '15px'
        },
        '&:hover': {
            backgroundColor: '#85bb65'
        }
    }
}))

const pMethods = [
    {id: 'none', title: "Select"},
    {id: 'Cash', title: "Cash"},
    {id: 'Card', title: "Card"}
]

export default function OrderForm(props) {

    const {values, errors, handleInputChange} = props;
    const classes = useStyles();

    return (
       <Form style= {{fontSize: "20px"}}>
           <Grid container>
             <Grid item xs ={6}>
                 <Input
                 disabled
                 label = "Order Number"
                 name = "orderNumber"
                 value = {values.orderNumber}
                 InputProps = {{
                     startAdornment : <InputAdornment
                     className= {classes.adornmentText}
                     position= "start">#</InputAdornment>
                 }}
                 />
                <Input
                 label = "Address"
                 name = "address"
                 //value = {values.}
                 />
            </Grid>
             <Grid item xs ={6}>
                <Input
                 disabled
                 label = "Grand Total"
                 name = "gTotal"
                 value = {values.gTotal}
                 InputProps = {{
                    startAdornment : <InputAdornment
                    className= {classes.adornmentText}
                    position= "start">$</InputAdornment>
                }}
                 />
                 <Select
                 label = "Payment Method"
                 name = "pMethod"
                 value = {values.pMethod}
                 onChange = {handleInputChange}
                 options = {pMethods}
                 />
                 <ButtonGroup className = {classes.submitButtonGroup}>
                     <MuiButton
                     size="large"
                     endIcon = {<RestaurantMenuIcon />}
                     type="submit">SUBMIT</MuiButton>
                     <MuiButton
                     size="large"
                     startIcon = {<ReplayIcon />}
                     />
                 </ButtonGroup>
                 <Button
                 size = "large"
                 startIcon = {<ReorderIcon />}>ORDERS</Button>
             </Grid> 
           </Grid>
       </Form>
    )
}
