import React from 'react';
import './App.css';
import Weather from './Weather';
import Auto from './Auto';
import OtherChoices from './OtherChoices';
import { connect } from 'react-redux';

let cities = require('./city.list.json')

function App(props) {
    return (
    <div className="App">
        <menu>
            <OtherChoices state={props}/>
            <Auto state={props} cities={cities}/>
        </menu>
        <result>
            <Weather state={props}/>
        </result>
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
