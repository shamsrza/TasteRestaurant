import { TableCell, TableRow, TableHead, TableBody } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import {createAPIEndpoint, ENDPOINTS} from '../../api' 
import Table from "../../layouts/Table"
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';


export default function ReservationList(props) {

    const { setResId, setReservationListVisibility, resetFormControls, setNotify } = props;
    const [reservationList, setReservationList] = useState([]);


    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.RESERVATION).fetchAll()
            .then(res => {
                setReservationList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const showForUpdate = id => {
        setResId(id);
        setReservationListVisibility(false);
    }


    const deleteReservation = id => {
        if (window.confirm('Are you sure to delete this record?'))
        {
            createAPIEndpoint(ENDPOINTS.RESERVATION).delete(id)
                .then(res => {
                    setReservationListVisibility(false);
                    setResId(0);
                    resetFormControls();
                    setNotify({ isOpen: true, message: 'Deleted successfully.' });
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{fontSize: "1em"}}>Reservation No.</TableCell>
                    <TableCell style={{fontSize: "1em"}}>Phone Number</TableCell>
                    <TableCell style={{fontSize: "1em"}}>Guests</TableCell>
                    <TableCell style={{fontSize: "1em"}}>Table No.</TableCell>
                    <TableCell style={{fontSize: "1em"}}>Date</TableCell>
                    <TableCell style={{fontSize: "1em"}}>Time</TableCell>
                    <TableCell style={{fontSize: "1em"}}></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    reservationList.map(item => (
                    <TableRow key= {item.reservationId}> 
                        <TableCell onClick = {e => showForUpdate(item.reservationId)} style={{fontSize: "0.8em", fontWeight: "bolder"}}>{"#  " + item.reservationNumber}</TableCell>
                        <TableCell onClick = {e => showForUpdate(item.reservationId)} style={{fontSize: "0.8em"}}>{item.phoneNumber}</TableCell>
                        <TableCell onClick = {e => showForUpdate(item.reservationId)} style={{fontSize: "0.8em"}}>{item.numberOfGuests}</TableCell>
                        <TableCell onClick = {e => showForUpdate(item.reservationId)} style={{fontSize: "0.8em"}}>{item.tableNumber}</TableCell>
                        <TableCell onClick = {e => showForUpdate(item.reservationId)} style={{fontSize: "0.8em"}}>{item.date}</TableCell>
                        <TableCell onClick = {e => showForUpdate(item.reservationId)} style={{fontSize: "0.8em"}}>{item.time}</TableCell>
                        <TableCell style={{fontSize: "1em"}}>
                                <DeleteOutlineTwoToneIcon
                                    color="secondary"
                                    onClick={e => deleteReservation(item.reservationId)} />
                        </TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
