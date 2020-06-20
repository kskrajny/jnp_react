import React from 'react';
import './App.css';
import Weather from './Weather';
import { getWeather , getLocation } from './functions'
import { connect } from 'react-redux';

let cities = require('./city.list.json')

function App(props) {
  console.log(props)
    return (
    <div className="App">
      <header className="App-header">
        <label>
            City:
            <input id='city' type="text" name="city" />
        </label>
        <button onClick={async () => {
            const city = document.getElementById('city').value
            let data;
            if(props.city !== city)
                data = await getWeather(cities, city)
            else
                data = props.weatherData
            props.changeWeather({
                type: "NEW_WEATHER",
                payload: {
                    city: city,
                    weatherData: data,
                    nr: 0
                }
            })
        }}>
            get weather by city
        </button>
          <button onClick={async () => {
              const location = await getLocation()
              console.log(location)
          }}>
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
        weatherData: state.weatherData
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
