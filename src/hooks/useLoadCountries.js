import { useEffect, useState } from 'react';

export default () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then((res) => res.json())
            .then((result) => {
                    setLoading(false);
                    const countries = result.Countries;

                    for (let i = 0; i < countries.length; i++) {
                        countries[i].Number = i + 1;
                    }
                    setData(countries);
                }
            )
            .catch((error) => {
                setLoading(false);
                setError(error);
            })
    }, []);

    return [data, loading, error];
}