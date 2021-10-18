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

    const getSearchDirection = (cl) => {
        let direction = '';

        if (cl.contains('asc')) {
            cl.remove('asc');
            cl.add('desc');
            direction = 'desc';
        } else {
            cl.remove('desc');
            cl.add('asc');
            direction = 'asc';
        }

        console.log(direction)

        return direction;
    };

    const getNumberSortFn = (cl, direction) => {
        if (direction === 'asc') {
            return (a, b) => {
                return a.Number - b.Number;
            }
        }

        return (a, b) => {
            return b.Number - a.Number;
        };
    };

    const getCountrySortFn = (cl, direction) => {
        if (direction === 'asc') {
            return (a, b) => {
                if (a.Country < b.Country)
                    return -1;
                if (a.Country > b.Country)
                    return 1;
                return 0;
            }
        }

        return (a, b) => {
            if (a.Country < b.Country)
                return 1;
            if (a.Country > b.Country)
                return -1;
            return 0;
        }
    };

    const getTotalConfirmedSortFn = (cl, direction) => {
        if (direction === 'asc') {
            return (a, b) => {
                return a.TotalConfirmed - b.TotalConfirmed;
            }
        }

        return (a, b) => {
            return b.TotalConfirmed - a.TotalConfirmed;
        };
    };

    const sort = (e) => {
        console.log(e.target.classList);
        const cl = e.target.classList;
        const direction = getSearchDirection(cl);
        if (cl.contains('number')) {
            setSortFn(() => getNumberSortFn(cl, direction));
        } else if (cl.contains('country')) {
            setSortFn(() => getCountrySortFn(cl, direction));
        } else if (cl.contains('totalconfirmed')) {
            setSortFn(() => getTotalConfirmedSortFn(cl, direction));
        }
    };

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
                            <th className="first left_header number" onClick={sort}>№</th>
                            <th className="border_header spacer_header country" onClick={sort}>Country</th>
                            <th className="border_header right_header totalconfirmed" onClick={sort}>Total Confirmed
                            </th>
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
