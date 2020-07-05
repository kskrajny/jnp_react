import React from "react"

const Search = ({ onLoc, onName, history}) => (
    <div className='Search'>
        <button onClick={() => onLoc(history)}>
            get weather by location
        </button>
        <button id='getByCity' onClick={() => onName(history)}>
            get weather by city
        </button>
    </div>
)

export default Search