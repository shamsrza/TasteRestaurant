import React, {useEffect} from 'react'
import {Container, Typography} from "@material-ui/core";
import Order from "../components/Order"
import { useHistory } from 'react-router-dom';

export default function MakeOrder() {


    return (
        <div>
        <Container maxWidth="md" style= {{marginTop: "150px"}}>
          <Typography
          gutterBottom
          variant= "h2"
          align = "center"
          fontStyle="italic"
          style= {{marginBottom: "70px"}}>
          Make your Order
          </Typography>
        <Order/>
          </Container>
      </div>
    )
}
