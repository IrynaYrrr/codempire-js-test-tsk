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
        <>
            <tr onClick={openModal}>
                <td className="first left">{country.Number}</td>
                <td className="border spacer">{country.Country}</td>
                <td className="border right">{country.TotalConfirmed}</td>
            </tr>
            <CountryModal country={country} open={modalOpen} closeModal={closeModal} />
        </>
    );
}

export default CountryItem;
