import React from "react";

const SearchBox = () => {
  return (
    <div>
      <form className="searchbox">
        <input type="text" placeholder="Search.." name="search" size={30} />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
