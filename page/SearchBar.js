
import { FaSearch } from "react-icons/fa";
import "../style/search-bar.css";

const SearchBar = () => {

  return (
    <div className="search-container">
    <div className="search-box">
        <button className="btn-search" type="button">
        <FaSearch />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Search Certificates..."
      />
      </div>
    </div>
  );
}

export default SearchBar;