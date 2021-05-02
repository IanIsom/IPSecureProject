import './App.css';

const SearchBar = () => (
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search Cars"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;