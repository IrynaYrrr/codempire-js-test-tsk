const getSummary = async () => {
    return fetch('https://api.covid19api.com/summary')
        .then((res) => res.json());
};

export default { getSummary };
