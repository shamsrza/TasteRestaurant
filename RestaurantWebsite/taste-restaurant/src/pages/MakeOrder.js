import React from 'react'
import {Container, Typography} from "@material-ui/core";
import Order from "../components/Order"

export default function MakeOrder() {
    return (
        <div>
            <Container maxWidth="md" style= {{marginTop: "150px"}}>
            <Typography
            gutterBottom
            variant= "h2"
            align = "center">
            Make an Order
            </Typography>

            <Order/>
            </Container>
        </div>
    )
}
