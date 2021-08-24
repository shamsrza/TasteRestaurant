import React, {useState} from 'react'
import Form from "../../layouts/Form"
import {Grid} from "@material-ui/core";
import {Input, Select, Button} from "../../controls"

const pMethods = [
    {id: 'none', title: "Select"},
    {id: 'Cash', title: "Cash"},
    {id: 'Card', title: "Card"}
]

const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = ()=>({
    orderMasterId: 0,
    orderNumber: generateOrderNumber(),
    userId: 0,
    user: {
        // name: { 
        //     if({name} !== '')
        //     {
        //         return name;
        //     }
        //     else
        //     {
        //         return "";
        //     }
        // }
    },    
    pMethod: "none",
    gTotal: 0,
    deletedOrderItemIds:'',
    orderDetails: []
});


export default function OrderForm() {
    const [values, setValues] = useState(getFreshModelObject());

    return (
       <Form style= {{fontSize: "20px"}}>
           <Grid container>
             <Grid item xs ={6}>
                 <Input
                 disabled
                 label = "Order Number"
                 name = "orderNumber"
                 value = {values.orderNumber}
                 />
                <Input
                 disabled
                 label = "Customer"
                 name = "userId"
                 value = {values.userId} 
                 />
            </Grid>
             <Grid item xs ={6}>
                <Input
                 disabled
                 label = "Grand Total"
                 name = "gTotal"
                 value = {values.gTotal}
                 />
                 <Select
                 label = "Payment Method"
                 name = "pMethod"
                 value = {values.pMethod}
                 options = {pMethods}
                 />
             </Grid> 
           </Grid>
       </Form>
    )
}
