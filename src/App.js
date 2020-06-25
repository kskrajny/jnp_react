import React, { useState } from 'react';
import './App.css';
import Weather from './Weather';
import Auto from './Auto';
import { connect } from 'react-redux';

function App(props){

    const [wantDarkMode, changeMode] = useState(true)

    const lightMode = {
        color: 'black',
        backgroundColor: 'white'
    }

    const darkMode = {
        color: 'grey',
        backgroundColor: '#282c34'
    }

    return (
        <div className="App" style={(wantDarkMode ? darkMode : lightMode)}>
            <button onClick={() => {changeMode(!wantDarkMode)}}>Change mode</button>
            <menu>
                <div>
                    <select name="type" id="type">
                        <option value="hourly">2/h</option>
                        <option value="daily">7/d</option>
                    </select>
                </div>
                <Auto data={props}/>
            </menu>
            <img id="tenor" alt=""/>
            <Weather data={props}/>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        history: state.history,
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
