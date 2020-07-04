import React from "react"
import { locationOnClick } from '../functions/locationFunctions'
import { cityOnClick } from '../functions/searchByNameFunctions'

const Search = ({wait, onLoc, onName, history}) => (
    <div className='Search'>
        <button onClick={() => {
            locationOnClick(onLoc, wait)
        }}>
            get weather by location
        </button>
        <button id='getByCity' onClick={() => {
            cityOnClick(history, onName, wait)
        }}>
            get weather by city
        </button>
    </div>
)

export default Search