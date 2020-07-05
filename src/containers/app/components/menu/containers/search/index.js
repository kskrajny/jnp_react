import React from "react"
import {connect} from "react-redux";
import {newForecastAction} from "./action";
import {selectorHistory} from "./selector";

const Search = ({ onName, history}) => (
    <div>
        <button id='getByCity' onClick={() => onName(history)}>
            get weather by city
        </button>
    </div>
)

const mapStateToProps = state => ({
    history: selectorHistory(state)
})

const mapDispatchToProps = dispatch => ({
    onName: (history) => dispatch(newForecastAction(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)