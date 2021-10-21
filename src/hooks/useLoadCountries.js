import { useEffect, useState } from 'react';
import covid19service from '../services/covid19';

const useLoadCounties = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        covid19service.getSummary()
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
