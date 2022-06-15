import React from "react";

const SearchFullName = ({handleSearchFullName, placeholder}) => {
    return (
        <div className = 'search'> 
            <input 
                onChange= {(event) => handleSearchFullName(event.target.value)}
                type= 'text'
                placeholder= {placeholder}
            />
        </div>
    )
}

export default SearchFullName;