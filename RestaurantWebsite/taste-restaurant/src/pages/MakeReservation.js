import React, {useState} from 'react'
import Reservation from "../components/Reservation"

import {Container, Typography} from "@material-ui/core";

export default function MakeReservation(){

return (
<div id="team" className="text-center">
<div className="overlay">
  <div className="container" id="reservation-form">
    <Container maxWidth="lg" style={{marginTop: "10px"}}>
    <Reservation />
    </Container >
  </div>
</div>
</div>

  )
}