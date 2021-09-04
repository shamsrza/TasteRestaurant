import React, {useState, useEffect} from 'react'
import Form from "../../layouts/Form"
import {Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton, FormHelperText} from "@material-ui/core";
import {useForm} from "../../hooks/useForm"
import {Input, Select, Button} from "../../controls";
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReorderIcon from '@material-ui/icons/Reorder';
import {roundTo2DecimalPoint} from '../../utils'
import {createAPIEndpoint, ENDPOINTS} from '../../api'
import Popup from "../../layouts/Popup"
import OrderList from "../../components/Order/OrderList"
import Notification from "../../layouts/Notification"

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

    const {values, setValues, errors, setErrors, handleInputChange, resetFormControls} = props;
    const [state, setState] = useState("");
    const classes = useStyles();
    const [orderListVisibility, setOrderListVisibility] = useState(false);
    const [orderId, setOrderId] = useState(0);
    const [notify, setNotify] = useState({isOpen: false})


    useEffect(() => {
        let gTotal = values.orderDetails.reduce((tempTotal, item) => {
            return tempTotal + (item.quantity * item.foodItemPrice);
        }, 0);
        setValues({
            ...values,
            gTotal: roundTo2DecimalPoint(gTotal)
        })

    }, [JSON.stringify(values.orderDetails)]);


    useEffect(() => {
        if (orderId == 0){

            resetFormControls()
        }
        else {
            createAPIEndpoint(ENDPOINTS.ORDER).fetchById(orderId)
                .then(res => {
                    setValues(res.data);
                    setErrors({});
                })
                .catch(err => console.log(err))
        }
    }, [orderId]);


    const validateForm = () => {
        let temp = {};
        temp.address = values.address != "" ? "" : "This field is required.";
        temp.pMethod = values.pMethod != "none" ? "" : "This field is required.";
        temp.orderDetails = values.orderDetails.length != 0 ? "" : "This field is required.";
        setErrors({...temp});
        return Object.values(temp).every(x => x === "");
    }

    const resetForm = () => {
        resetFormControls();
        setOrderId(0);
    }

    const submitOrder = e => {
        e.preventDefault();
        if(validateForm()){
            if(values.orderMasterId == 0){
            createAPIEndpoint(ENDPOINTS.ORDER).create(values)
            .then(res => {
                resetFormControls();
                setNotify({isOpen: true, message: "New order is created."})
            })
            .catch(err => console.log(err)); 
            }
            else{
                createAPIEndpoint(ENDPOINTS.ORDER).update(values.orderMasterId, values)
            .then(res => {
                setOrderId(0);
                setNotify({isOpen: true, message: "The order is updated."})
            })
            .catch(err => console.log(err));
            }
            
        }
    }

    //values.address = addressInput;

    const openListOfOrders = () => {
        setOrderListVisibility(true);
    }

    return (
        <>
       <Form onSubmit={submitOrder} style= {{fontSize: "20px"}}>
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
                 label = "Address  "
                 name = "address"
                 value = {values.address}
                 onChange={handleInputChange}
                 error = {errors.address}
                 />
            </Grid>
             <Grid item xs ={6}>
                <Input
                 disabled
                 label = "Grand Total "
                 name = "gTotal"
                 value = {values.gTotal}
                 InputProps = {{
                    startAdornment : <InputAdornment
                    className= {classes.adornmentText}
                    position= "start">$</InputAdornment>
                }}
                 />
                 <Select
                 label = "Payment Method  "
                 name = "pMethod"
                 value = {values.pMethod}
                 onChange = {handleInputChange}
                 options = {pMethods}
                 error = {errors.pMethod}
                 />
                 <ButtonGroup className = {classes.submitButtonGroup}>
                     <MuiButton
                     size="large"
                     endIcon = {<RestaurantMenuIcon />}
                     type="submit">SUBMIT</MuiButton>
                     <MuiButton
                     size="large"
                     onClick= {resetForm}
                     startIcon = {<ReplayIcon />}
                     />
                 </ButtonGroup>
                 <Button
                 size = "large"
                 onClick = {openListOfOrders}
                 startIcon = {<ReorderIcon />}>ORDERS</Button>
             </Grid> 
           </Grid>
       </Form>
       <Popup
       title={<div style={{textAlign: "center", fontSize: "1.5em"}}>List of Orders</div>}
       openPopup={orderListVisibility}
       setOpenPopup={setOrderListVisibility}>
           <OrderList
           {...{setOrderId, setOrderListVisibility,resetFormControls,setNotify}}/>
        </Popup>
        <Notification
                {...{ notify, setNotify }} />
    </>
    )
}
