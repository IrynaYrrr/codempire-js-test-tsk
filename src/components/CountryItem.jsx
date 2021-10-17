import '../App.css';
import { useState } from 'react';
import CountryModal from './CountryModal';

const CountryItem = (props) => {
    const { country } = props;

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        if (modalOpen === false) {
            setModalOpen(true);
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="main" onClick={openModal}>
            <div className="flex"> {country.Number}</div>
            <div className="flex">{country.Country}</div>
            <div className="flex">{country.TotalConfirmed}</div>
            <CountryModal country={country} open={modalOpen} closeModal={closeModal} />
        </div>
    );
}

export default CountryItem;
