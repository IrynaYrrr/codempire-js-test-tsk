const baseURL = 'https://api.covid19api.com/';

const getSummary = async () => {
    return fetch(`${baseURL}summary`)
        .then((res) => res.json());
};

export default { getSummary };
