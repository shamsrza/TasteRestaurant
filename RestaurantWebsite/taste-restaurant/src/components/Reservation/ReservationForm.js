import React from 'react'
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

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str =><div>{str}</div>);
}

export default function ReservationForm(props) {

  //const[values, setValues] = useState(getFreshModelObject());
  const {values, setValues, errors, setErrors, handleInputChange, resetFormControls} = props;
  const classes = useStyles();
  

    return (
    // <div className="col-lg-12">
    //   <div className="contact-form">

    //    <form id="contact" action="" method="post" autoComplete="off">
    //       <div className="row">
    //         <div className="col-lg-12">
    //           <h4>Table Reservation</h4>
    //           <h5 style={{color: 'black', paddingBottom: '10px', fontSize: '12px', fontWeight:'800', fontStyle: 'italic' }}> * Please save your reservation number </h5>
    //         </div>
    //         <div className="col-lg-6 col-sm-12">
    //         <input
    //               name="email"
    //               type="text"
    //               id="email"
    //               pattern="[^ @]*@[^ @]*"
    //               placeholder="Reservation Number"
    //               value= {generateOrderNumber}
    //               required=""
    //             /> 
    //             <input
    //              disabled
    //              label = "Reservation Number"
    //              name = "reservationNumber"
    //              //value = {props.reservationNumber}
    //               //placeholder="Reservation Number"
    //               value= {generateOrderNumber}
    //              InputProps = {{
    //                  startAdornment : <InputAdornment position= "start">#</InputAdornment>
    //              }}
    //              />
    //         </div>
    //         <div className="col-md-6 col-sm-12">
    //             <select
    //               defaultValue="number-guests"
    //               name="number-guests"
    //               id="number-guests"
    //             >
    //               <option defaultValue="number-guests">Number Of Guests</option>
    //               <option name="1" id="1">1</option>
    //               <option name="2" id="2">2</option>
    //               <option name="3" id="3">3</option>
    //               <option name="4" id="4">4</option>
    //               <option name="5" id="5">4+</option>
    //             </select>
    //         </div>
    //         <div className="col-lg-6 col-sm-12">
    //            <input
    //               name="name"
    //               type="text"
    //               id="name"
    //               placeholder="Email address*"
    //               required=""
    //             />
    //         </div>
    //         <div className="col-lg-6 col-sm-12">
    //             <input
    //               name="phone"
    //               type="text"
    //               id="phone"
    //               placeholder="Phone Number*"
    //               required=""
    //             />
    //         </div>
    //         <div className="col-lg-6">
    //             <input
    //                 name="date"
    //                 id="date"
    //                 type="date"
    //                 className="form-control"
    //                 placeholder="Choose time"
    //               />
    //         </div>
    //         <div className="col-md-6 col-sm-12">
    //             <input
    //             name="time"
    //             id="time"
    //             type="time"
    //             className="form-control"
    //           />
    //         </div>
    //         <div className="col-lg-12">
    //             <textarea
    //               name="message"
    //               id="message"
    //               placeholder="Message"
    //               style={{ height: "70px"}}
    //             ></textarea>
    //         </div>
    //         <div className="col-lg-12">
    //             <button
    //               type="submit"
    //               id="form-submit"
    //               className="main-button-icon"
    //             >
    //               Make A Reservation
    //             </button>
    //         </div>
    //       </div>
    //     </form> 

    //   </div>
    // </div> 
      <Form>
            <Grid container>
              <Grid item xs={12}>
                <h4>Table Reservation</h4>
                <h5 style={{color: 'black', paddingBottom: '10px', fontSize: '12px', fontWeight:'800', fontStyle: 'italic' }}> * Please save your reservation number </h5>
              </Grid>
            <Grid item xs={6} >
            <ReservationInput
                 disabled
                 label = {<NewlineText text={'Reservation\nnumber'} />}
                 name = "reservationNumber"
                 // value = {values.reservationNumber}
                 InputProps = {{
                     startAdornment : <InputAdornment
                     className= {classes.adornmentText}
                     position= "start">#</InputAdornment>
                 }}
                 />
                 <ReservationSelect
                 label= "Guests"
                 name="numberOfGuests"
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
                 //value = {values.date}
                 type= "date"
                 />
            </Grid>
            <Grid item xs={6}>
            <ReservationInput
                 label = "Phone"
                 name = "phoneNumber"
                 //value = {values.phoneNumber}
                 />
            <ReservationSelect
                 label= "Table"
                 name="tableNumber"
                 options = {[
                   {id: 1, title: "A1"},
                   {id: 2, title: "A2"},
                   {id: 3, title: "A3"},
                   {id: 4, title: "B1"},
                   {id: 5, title: "B2"},
                   {id: 6, title: "B3"},
                   {id: 7, title: "C1"},
                   {id: 8, title: "C2"},
                   {id: 9, title: "C3"}
                 ]}
                 />
                 <ReservationInput
                 name = "time"
                 //value = {values.time}
                 type= "time"
                 />
            </Grid>
            <Grid item xs={12}>
            <TextareaAutosize
            style={{color:"black", marginTop: "20px", width: "95%", borderRadius: "4px"}}
            minRows={3}
            aria-label="maximum height"
            placeholder="Message..."
            />
            <button 
            type="submit"
            style={{backgroundColor: "green", color: "white", border: "none", padding: "10px 174px", margin: "20px 0", borderRadius: "4px"}}>
            Make a reservation</button>
            </Grid>
            </Grid>
        </Form>
    )
}
