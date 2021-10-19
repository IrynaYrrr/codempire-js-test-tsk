const SearchInput = (props) => {
    const { value, setValue } = props;

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="input_wrapper">

            <img className="search_svg"
                 src={`${process.env.PUBLIC_URL}/assets/search.svg`}
                 alt="search" />

            <input className="header_search"
                   value={value}
                   onChange={onChange}
                   type="text"
                   id="site-search"
                   name="search"
                   required placeholder="Search..."
                   aria-label="Search through site content"
            />
        </div>
    );
};

export default SearchInput;
