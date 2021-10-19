import { useEffect, useState } from 'react';

const useLoadCounties = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then((res) => res.json())
            .then((result) => {
                    setLoading(false);
                    const countries = result.Countries;
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

export default useLoadCounties;
