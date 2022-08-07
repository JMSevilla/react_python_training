import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ApplicationTable = (props) => {
    const { rows } = props

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Website</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody> 
                    {rows.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.email}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.username}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.website}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
        </Table>
    )
}

export default ApplicationTable