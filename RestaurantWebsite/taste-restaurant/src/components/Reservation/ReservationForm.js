import React, {useState, useEffect} from 'react'
import { Grid, InputAdornment, makeStyles, Typography, Button as MuiButton, ButtonGroup  } from '@material-ui/core';
import Form from "../../layouts/Form"
import {ReservationInput, ReservationSelect, Button} from "../../controls";
import ReplayIcon from '@material-ui/icons/Replay';
import ReorderIcon from '@material-ui/icons/Reorder';
import {createAPIEndpoint, ENDPOINTS} from '../../api'
import Popup from "../../layouts/Popup"
import ReservationList from "../../components/Reservation/ReservationList"
import Notification from "../../layouts/Notification"

const useStyles = makeStyles(theme=>({
  submitButtonGroup: {
      backgroundColor: 'green',
      border: "none",
      margin: theme.spacing(1),
      '& .MuiButton-label': {
          textTransform: "none",
          fontSize: '15px',
      },
      '&:hover': {
          backgroundColor: 'green'
      }
  }
  
}))

const numberOfGuests = [
  {id: 1, title: " 1 "},
  {id: 2, title: " 2 "},
  {id: 3, title: " 3 "},
  {id: 4, title: " 4"},
  {id: 5, title: " 4+ "}
]

export default function ReservationForm(props) {

  const {values, setValues, errors, setErrors, handleInputChange, resetFormControls} = props;
  
  const classes = useStyles();
  const [resId, setResId] = useState(0);
  const [reservationListVisibility, setReservationListVisibility] = useState(false);
  const [notify, setNotify] = useState({isOpen: false})
  const [existRes, setExistRes ] = useState(false);


  useEffect(() => {
    if (resId == 0){

        resetFormControls()
    }
    else {
        createAPIEndpoint(ENDPOINTS.RESERVATION).fetchById(resId)
            .then(res => {
                setValues(res.data);
                setErrors({});
            })
            .catch(err => console.log(err))
    }
}, [resId]);


  const errorMessage = (
  <div style={{color: "red"}}>This field is required.</div>
  )

  const validateForm = () => {
    let temp = {};
    temp.phoneNumber = values.phoneNumber != '' ? '' : errorMessage;
    temp.tableNumber = values.tableNumber != "" ? "" : errorMessage;
    temp.date = values.date != "" ? "" : errorMessage;
    temp.time = values.time != "" ? "" : errorMessage;
    temp.numberOfGuests = values.numberOfGuests != 0 ? "" : errorMessage;
    setErrors({...temp});
    return Object.values(temp).every(x => x === "");
  }

const resetForm = () => {
  resetFormControls();
  setResId(0);
}

//For checking if this reservation is exist or not
const existedReservation = () => {
  // const newRes = {};
  createAPIEndpoint(ENDPOINTS.RESERVATION).fetchByDate(values)
    .then(response => {
      if(values.tableNumber == response.tableNumber){
        setExistRes(true);
        console.log("exist");
      }
    })
 }


 const submitReservation = (e, newRes) =>
 {
   e.preventDefault();
  //   if(existedReservation())
  //    setNotify({isOpen: true, message: "This reservation is existed."})

   if(validateForm()){
    if(values.reservationId == 0){
     createAPIEndpoint(ENDPOINTS.RESERVATION).create(values)
     .then(res => {
       resetFormControls();
       setNotify({isOpen: true, message: "New reservation is created."})
     })
     .catch(err => console.log(err));
     }
     else{
       createAPIEndpoint(ENDPOINTS.RESERVATION).update(values.reservationId, values)
   .then(res => {
       setResId(0);
       setNotify({isOpen: true, message: "The reservation is updated."})
   })
   .catch(err => console.log(err));
   }

   }   
  }

const openListOfReservations = () => {
  setReservationListVisibility(true);
}
    return (
      <>
      <Form onSubmit ={submitReservation} style = {{backgroundColor: "white", padding: "15px", borderRadius: "5px"}}>
            <Grid container>
              <Grid item xs={12}>
                <h4 style={{fontWeight: 600}}>Table Reservation</h4>
                <h5 style={{color: 'black', paddingBottom: '10px', fontSize: '12px', fontWeight:'800', fontStyle: 'italic' }}> * Please save your reservation number </h5>
              </Grid>
              <Grid item xs={6}>
                <ReservationInput
                 disabled
                 label = 'Reservation number'
                 name = "reservationNumber"
                 value = {values.reservationNumber}
                 InputProps = {{
                  startAdornment : <InputAdornment
                  position="start"><Typography style= {{fontWeight: 'bolder',
                  fontSize: '1.8em', color: "#85bb65"}}>#</Typography></InputAdornment>
                 }}
                 />
                 <ReservationSelect
                 label= "Number of Guests"
                 name="numberOfGuests"
                 onChange = {handleInputChange}
                 options = {numberOfGuests}
                 error = {errors.numberOfGuests}
                 />
                 <ReservationInput
                 name = "date"
                 type= "date"
                 value = {values.date}
                 onChange={handleInputChange}
                 error = {errors.date}
                 />
               </Grid>

               <Grid item xs={6}>

                <ReservationInput
                 label = "Phone number"
                 name = "phoneNumber"
                 value = {values.phoneNumber}
                 onChange={handleInputChange}
                 error = {errors.phoneNumber}
                 />

                <ReservationSelect
                 label= "Table number"
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
                 error = {errors.tableNumber}
                 />
                 <ReservationInput
                 name = "time"
                 value = {values.time}
                 onChange={handleInputChange}
                 type= "time"
                 error = {errors.time}
                 />
              </Grid>
            <Grid item xs={12}>
            <ReservationInput
            value = {values.message}
            onChange = {handleInputChange}
            style={{color:"black", marginTop: "15px", width: "95%",borderRadius: "4px"}}
            size="normal"
            placeholder="Message..."
            />
                <ButtonGroup className = {classes.submitButtonGroup}>
                     <MuiButton
                     size="large"
                     type="submit"
                     style={{padding: "0 140px", color: "white"}}
                     >SUBMIT</MuiButton>
                     <MuiButton
                     size="large"
                     onClick= {resetForm}
                     startIcon = {<ReplayIcon />}
                     />
                     <MuiButton
                     size="large"
                     onClick= {openListOfReservations}
                     startIcon = {<ReorderIcon />}
                     />
                 </ButtonGroup>
                 {/* <Button
                 size = "large"
                 //onClick = {openListOfOrders}
                 startIcon = {<ReorderIcon />}>ORDERS</Button> */}
            </Grid>
            </Grid>
        </Form>
        <Popup
       title={<div style={{textAlign: "center", fontSize: "1.5em"}}>List of Reservations</div>}
       openPopup={reservationListVisibility}
       setOpenPopup={setReservationListVisibility}>
           <ReservationList 
           {...{setResId, setReservationListVisibility, resetFormControls, setNotify}}/>
        </Popup>
        <Notification
                {...{ notify, setNotify }} />
      </>
    )
}
