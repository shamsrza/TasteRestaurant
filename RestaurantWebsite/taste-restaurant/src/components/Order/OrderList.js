import React, {useEffect, useState} from 'react'
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import Table from "../../layouts/Table"
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';

export default function OrderList(props) {
    const { setOrderId, setOrderListVisibility, resetFormControls, setNotify } = props;

    const [orderList, setOrderList] = useState([]);
    
    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ORDER).fetchAll()
            .then(res => {
                setOrderList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const showForUpdate = id => {
        setOrderId(id);
        setOrderListVisibility(false);
    }

    const deleteOrder = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            createAPIEndpoint(ENDPOINTS.ORDER).delete(id)
                .then(res => {
                    setOrderListVisibility(false);
                    setOrderId(0);
                    resetFormControls();
                    setNotify({ isOpen: true, message: 'Deleted successfully.' });
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{fontSize: "1em"}}>ORDER No.</TableCell>
                    <TableCell style={{fontSize: "1em"}}>ADDRESS</TableCell>
                    <TableCell style={{fontSize: "1em"}}>PAYED WITH</TableCell>
                    <TableCell style={{fontSize: "1em"}}>GRAND TOTAL</TableCell>
                    <TableCell style={{fontSize: "1em"}}></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orderList.map(item => (
                        <TableRow key={item.orderMasterId}>
                            <TableCell
                                style={{fontSize: "1em", fontWeight: "700"}}
                                onClick={e => showForUpdate(item.orderMasterId)}>
                                {"# " + item.orderNumber}
                            </TableCell>
                            <TableCell
                            style={{fontSize: "1em"}}
                                onClick={e => showForUpdate(item.orderMasterId)}>
                                {item.address}
                            </TableCell>
                            <TableCell
                            style={{fontSize: "1em"}}
                                onClick={e => showForUpdate(item.orderMasterId)}>
                                {item.pMethod}
                            </TableCell>
                            <TableCell
                            style={{fontSize: "1em"}}
                                onClick={e => showForUpdate(item.orderMasterId)}>
                                {"$ " + item.gTotal}
                            </TableCell>
                            <TableCell style={{fontSize: "1em"}}>
                                <DeleteOutlineTwoToneIcon
                                    color="secondary"
                                    onClick={e => deleteOrder(item.orderMasterId)} />
                            </TableCell>

                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </>
    )
}
