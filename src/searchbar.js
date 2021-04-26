import React from "react";

const SearchBar = () =>{
    return(
        <div className="search_bar">
        <i class="fa fa-search fa-2x" ></i>
        <input type="text" placeholder="Search" className="search_input" />
        </div>
    );
};

export default SearchBar;