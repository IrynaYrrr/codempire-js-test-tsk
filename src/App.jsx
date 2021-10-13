import './App.css';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import * as React from 'react';

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.covid19api.com/countries')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);

                    for (let i = 0; i < result.length;i++) {
                        result[i].number = i+1;
                    }

                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            // <ul>
            //     {items.map(item => (
            //         <li key={item.ISO2}>
            //             {item.ISO2} {item.Country}
            //         </li>
            //     ))}
            // </ul>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Total Confirmed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((items) => (
                            <TableRow
                                key={items.ISO2}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {items.number}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {items.Country}
                                </TableCell>
                                <TableCell align="right">{items.ISO2}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default MyComponent;
