import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
    },
};

Modal.setAppElement('#root');

const CountryModal = (props) => {
    const { country, open, closeModal } = props;

    return (
        <>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="heading_modal">{country.Country}</div>
                <div className="common_modal">
                    <div className="left_right">
                        <div className="left_total">
                            <img className="svg"
                                 src={`${process.env.PUBLIC_URL}/assets/confirmed.svg`}
                                 alt="confirmed"
                            />
                            TotalConfirmed
                        </div>
                        <div className="right_number">
                            {country.TotalConfirmed}
                        </div>
                    </div>
                    <div className="left_right">
                        <div className="left_total">
                            <img className="svg"
                                 src={`${process.env.PUBLIC_URL}/assets/deaths.svg`}
                                 alt="deaths"
                            />
                            TotalDeaths
                        </div>
                        <div className="right_number">
                            {country.TotalDeaths}
                        </div>
                    </div>
                    <div className="left_right">
                        <div className="left_total">
                            <img className="svg"
                                 src={`${process.env.PUBLIC_URL}/assets/recovered.svg`}
                                 alt="recovered"
                            />
                            TotalRecovered
                        </div>
                        <div className="right_number">
                            {country.TotalRecovered}
                        </div>
                    </div>
                </div>
                <div className="button_wrapper">
                    <button
                        className="button_modal"
                        onClick={closeModal}> OK
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default CountryModal;
