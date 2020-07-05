import React from "react"

const Search = ({ onName, history}) => (
    <div className='Search'>
        <button id='getByCity' onClick={() => onName(history)}>
            get weather by city
        </button>
    </div>
)

export default Search