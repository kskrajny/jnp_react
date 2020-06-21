import React from 'react';
import './App.css';
import Weather from './Weather';
import { cityOnClick , locationOnClick } from './functions'
import { connect } from 'react-redux';

let cities = require('./city.list.json')

function App(props) {
    return (
    <div className="App">
      <header className="App-header">

          <label>
              City:
              <input id='city' type="text" name="city" />
          </label>

          <label htmlFor="type">Type:</label>
          <select name="type" id="type">
              <option value="hourly">2/h</option>
              <option value="daily">7/d</option>
          </select>

          <button onClick={() => cityOnClick(cities, props)}>
              get weather by city
          </button>

          <button onClick={() => locationOnClick(props)}>
              get weather by location
          </button>

          <Weather state={props}/>

      </header>
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
