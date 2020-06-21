import {locationOnClick} from "./functions";
import React from "react";

function OtherChoices(props) {
    return (
        <div>
            <label htmlFor="type">Type:</label>
            <select name="type" id="type">
                <option value="hourly">2/h</option>
                <option value="daily">7/d</option>
            </select>

            <button onClick={() => locationOnClick(props.state)}>
                get weather by location
            </button>
        </div>
    )
}

export default OtherChoices