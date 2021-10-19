import { useState } from 'react';
import useLoadCountries from './hooks/useLoadCountries';
import SearchInput from './components/SearchInput';
import CountryItem from './components/CountryItem';
import {
    getSearchDirection,
    getNumberSortFn,
    getCountrySortFn,
    getTotalConfirmedSortFn,
    getSearchArrow
} from './libs/sort';
import './App.css';

const App = () => {
    const [countries, loading, error] = useLoadCountries();
    const [searchValue, setSearchValue] = useState('');
    const [sortFn, setSortFn] = useState();
    const [sortHeaders, setSortHeaders] = useState(
        { number: '', country: getSearchArrow('asc'), totalConfirmed: '' }
    );

    const searchFilter = (c) =>
        c.Country.toUpperCase().indexOf(searchValue.toUpperCase()) === 0;

    const sort = (e) => {
        const cl = e.target.classList;
        const direction = getSearchDirection(cl);
        if (cl.contains('number')) {
            setSortFn(() => getNumberSortFn(cl, direction));
            setSortHeaders({ number: getSearchArrow(direction), country: '', totalConfirmed: '' });
        } else if (cl.contains('country')) {
            setSortFn(() => getCountrySortFn(cl, direction));
            setSortHeaders({ number: '', country: getSearchArrow(direction), totalConfirmed: '' });
        } else if (cl.contains('totalconfirmed')) {
            setSortFn(() => getTotalConfirmedSortFn(cl, direction));
            setSortHeaders({ number: '', country: '', totalConfirmed: getSearchArrow(direction) });
        }
    };

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else {
        return (
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
                            <th className="first left_header number" onClick={sort}>
                                № {sortHeaders.number}
                            </th>
                            <th className="border_header spacer_header country asc" onClick={sort}>
                                Country {sortHeaders.country}
                            </th>
                            <th className="border_header right_header totalconfirmed" onClick={sort}>
                                Total Confirmed {sortHeaders.totalConfirmed}
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
