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
import useLoadCountries from './hooks/useLoadCountries';
import SearchInput from './components/SearchInput';

function App() {
    const [countries, loading, error] = useLoadCountries();
    const [searchValue, setSearchValue] = useState('');

    const searchFilter = (c) =>
        c.Country.toUpperCase().indexOf(searchValue.toUpperCase()) === 0;

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <SearchInput value={searchValue} setValue={setSearchValue} />
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
                            {countries.filter(searchFilter).map((items) => (
                                <TableRow
                                    key={items.ID}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {items.Number}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {items.Country}
                                    </TableCell>
                                    <TableCell align="right">{items.TotalConfirmed}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default App;
