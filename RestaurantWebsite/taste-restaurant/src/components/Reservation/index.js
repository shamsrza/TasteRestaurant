import React from 'react'
import ReservationForm from './ReservationForm'
import Contacts from './Contacts'
import { Grid } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';

const generateReservationNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

    const getFreshModelObject = ()=>({
        reservationId: 0,
        reservationNumber: generateReservationNumber(),
        phoneNumber: "",
        numberOfGuests: "none",
        date:"",
        email: "",
        time: "",
        message: ""
    });

export default function Reservation() {
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
    } = useForm(getFreshModelObject);

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}><Contacts /></Grid>
            <Grid item xs={6} style = {{backgroundColor: "white", padding: "30px", borderRadius: "5px"}}><ReservationForm/></Grid>         
        </Grid>
    )
}
