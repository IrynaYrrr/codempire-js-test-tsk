import './App.css';
import { useEffect, useState } from 'react';
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
            // <div className="main_wrapper">
            //     <SearchInput value={searchValue} setValue={setSearchValue} />
            //
            //     <div className="captions">
            //         <div className="caption_number caption">
            //             <div className="caption_div"> № </div>
            //         </div>
            //         <div className="caption_country caption">
            //             <div className="caption_div"> Country </div>
            //         </div>
            //         <div className="caption_total caption" onClick={sort}>
            //             <div className="caption_div"> Total Confirmed </div>
            //         </div>
            //     </div>
            //     {countries.filter(searchFilter).sort(sortFn).map((country) => (
            //         <CountryItem key={country.ID} country={country} />
            //     ))}
            // </div>

            <>
                <div className="header_wrapper">
                    <div className="header_logo_title">
                        <a href="/" className="header_logo">
                            <img className="logo_img"
                                 src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                                 alt="logo" />
                        </a>
                        <h1 className="header_title">STATISTIC</h1>
                    </div>
                    <SearchInput value={searchValue} setValue={setSearchValue} />
                </div>

                <div className="div_table">
                    <table className="main_table">
                        <thead className="thead">
                        <tr className="header_table">
                            <th className="first left_header">№</th>
                            <th className="border_header spacer_header">Country</th>
                            <th className="border_header right_header">Total Confirmed</th>
                        </tr>
                        </thead>
                        <tbody className="tbody">
                        {countries.filter(searchFilter).sort(sortFn).map((country) => (
                            <CountryItem key={country.ID} country={country} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}


export default App;
