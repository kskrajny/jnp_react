import React from 'react';
import './App.css';
import Weather from './Weather';
import Auto from './Auto';
import { connect } from 'react-redux';
import {locationOnClick} from "./functions";

let cities = require('./city.list.json')

function App(props) {
    return (
    <div className="App">
        <menu>
            <div>
                <select name="type" id="type">
                    <option value="hourly">2/h</option>
                    <option value="daily">7/d</option>
                </select>
            </div>
            <div>
                <button onClick={() => locationOnClick(props)}>
                    get weather by location
                </button>
            </div>
            <Auto data={props} cities={cities}/>
        </menu>
        <img id="tenor" alt=""/>
        <Weather data={props}/>
    </div>
  );
}

const mapStatetoProps = state => {
    return {
        city: state.city,
        weatherData: state.weatherData,
        type: state.type
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        changeWeather: (mess) => {
            dispatch(mess)
        }
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(App)
