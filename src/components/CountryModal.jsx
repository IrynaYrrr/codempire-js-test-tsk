import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const CountryModal = (props) => {
    const {country, open, closeModal} = props;

    return (
        <div>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div>{country.Country}</div>
                <div>TotalConfirmed {country.TotalConfirmed}</div>
                <div>TotalDeaths {country.TotalDeaths}</div>
                <div>TotalRecovered {country.TotalRecovered}</div>
                <button onClick={closeModal}>OK</button>
            </Modal>
        </div>
    );
}

export default CountryModal;
