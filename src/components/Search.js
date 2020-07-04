import React from "react";
import { cityOnClick, locationOnClick } from "../functions/functionsOnEvent";

const Search = ({wait, onLoc, onName, history}) => (
    <div className='Search'>
        <button onClick={() => {
            wait(true)
            locationOnClick(onLoc)
            wait(false)
        }}>
            get weather by location
        </button>
        <button id='getByCity' onClick={() => {
            wait(true)
            cityOnClick(history, onName)
            wait(false)
        }}>
            get weather by city
        </button>
    </div>
)

export default Search