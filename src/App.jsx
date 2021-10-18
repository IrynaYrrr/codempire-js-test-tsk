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
import CountryModal from './components/CountryModal';
import CountryItem from './components/CountryItem';

const App = () => {
    const [countries, loading, error] = useLoadCountries();
    const [searchValue, setSearchValue] = useState('');
    const [sortFn, setSortFn] = useState();

    console.log(sortFn);

    const searchFilter = (c) =>
        c.Country.toUpperCase().indexOf(searchValue.toUpperCase()) === 0;


    const sort = (e) => {
        console.log(e)
        setSortFn(() => (a, b) => {
            return a.TotalConfirmed - b.TotalConfirmed;
        })
        e.target.classList.add('article')
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <SearchInput value={searchValue} setValue={setSearchValue} />

                <div className="main">
                    <div className="flex">№</div>
                    <div className="flex">Country</div>
                    <div className="flex" onClick={sort}>Total Confirmed</div>
                </div>
                {countries.filter(searchFilter).sort(sortFn).map((country) => (
                    <CountryItem key={country.ID} country={country} />
                ))}
            </div>
        );
    }
}

export default App;
