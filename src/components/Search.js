import { useRef } from "react";
import searchButton from "../imgs/search-button.svg";

const Search = (props) => {
  const searchInput = useRef();
  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="search"
          value={props.searchData}
          onChange={() => props.eventHandler(searchInput.current.value)}
          ref={searchInput}
          placeholder="Search"
        />
      </div>
      <div className="searchButton">
        <button type="submit" onClick={props.searchWeather}>
          <img src={searchButton} />
        </button>
      </div>
    </div>
  );
};

export default Search;
