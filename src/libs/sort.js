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

const getSearchArrow = (direction) => {
    if (direction === 'asc') {
        return '🔺'
    }

    return '🔻';
}

export { getSearchDirection, getNumberSortFn, getCountrySortFn, getTotalConfirmedSortFn, getSearchArrow };
