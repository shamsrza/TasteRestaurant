import React, {useState} from 'react'
import { Grid, InputAdornment, makeStyles, TextareaAutosize } from '@material-ui/core';
import Form from "../../layouts/Form"
import {ReservationInput, ReservationSelect, Button} from "../../controls";

const useStyles = makeStyles(theme=>({
  adornmentText: {
      '& .MuiTypography-root': {
          color: '#85bb65',
          fontWeight: 'bolder',
          fontSize: '2em'
      }
  }
  
}))

const generateReservationNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = ()=> ({
        reservationId: 0,
        reservationNumber: generateReservationNumber(),
        phoneNumber: "",
        numberOfGuests: "none",
        date:"",
        email: "",
        time: "",
        message: "",
        tableNumber: ""
    })

export default function ReservationForm(props) {

  const[values, setValues] = useState(getFreshModelObject());
  const {errors, setErrors, handleInputChange, resetFormControls} = props;
  const [phoneInput, setPhoneInput] = useState("");
  const [textArea, setTextArea] = useState("");
  const classes = useStyles();

    return (
      <Form style = {{backgroundColor: "white", padding: "15px", borderRadius: "5px", height: "94%"}}>
            <Grid container>
              <Grid item xs={12}>
                <h4 style={{fontWeight: 600}}>Table Reservation</h4>
                <h5 style={{color: 'black', paddingBottom: '10px', fontSize: '12px', fontWeight:'800', fontStyle: 'italic' }}> * Please save your reservation number </h5>
              </Grid>
            <Grid item xs={6} >
            <ReservationInput
                 disabled
                 label = 'Reservation number'
                 name = "reservationNumber"
                 value = {"#  " + values.reservationNumber}
                 />
                 <ReservationSelect
                 label= "Guests"
                 name="numberOfGuests"
                 onChange = {handleInputChange}
                 options = {[
                   {id: 1, title: "1"},
                   {id: 2, title: "2"},
                   {id: 3, title: "3"},
                   {id: 4, title: "4"},
                   {id: 5, title: "4+"}
                 ]}
                 />
                 <ReservationInput
                 name = "date"
                 value = {values.date.id}
                 type= "date"
                 />
            </Grid>
            <Grid item xs={6}>
                <ReservationInput
                 label = "Phone"
                 name = "phoneNumber"
                 // error = {errors.phoneNumber}
                 onChange={e => setPhoneInput(e.target.value)}
                 />

            <ReservationSelect
                 label= "Table"
                 name="tableNumber"
                 onChange = {handleInputChange}
                 options = {[
                   {id: 1, title: "Front 1"},
                   {id: 2, title: "Front 2"},
                   {id: 3, title: "Front 3"},
                   {id: 4, title: "Center 1"},
                   {id: 5, title: "Center 2"},
                   {id: 6, title: "Center 3"},
                   {id: 7, title: "Back 1"},
                   {id: 8, title: "Back 2"},
                   {id: 9, title: "Back 3"}
                 ]}
                 />
                 <ReservationInput
                 name = "time"
                 value = {values.time.id}
                 type= "time"
                 />
            </Grid>
            <Grid item xs={12}>
            <TextareaAutosize
            style={{color:"black", marginTop: "15px", width: "95%", borderRadius: "4px"}}
            minRows={3}
            aria-label="maximum height"
            placeholder="Message..."
            onChange={e => setTextArea(e.target.value)}
            />
            <button 
            type="submit"
            style={{backgroundColor: "green", color: "white", border: "none", padding: "10px 163px", margin: "15px 0", borderRadius: "4px", fontSize: "18px"}}>
            Make a reservation</button>
            </Grid>
            </Grid>
        </Form>
    )
}
