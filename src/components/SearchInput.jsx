const SearchInput = (props) => {

const {value, setValue} = props;

    const onChange = (e) => {
         setValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
};

export default SearchInput;