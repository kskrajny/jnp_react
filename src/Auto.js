import React from 'react';
import ReactAutocomplete from 'react-autocomplete'
import {cityOnClick, locationOnClick} from './functions';
import { throttle, debounce } from "throttle-debounce";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

let cities = require('./city.list.json')

function setStateOfWaiting(bool){
    this.setState({
        loading: bool
    })
}

class Waiting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
        setStateOfWaiting = setStateOfWaiting.bind(this)
    }

    render() {
        if(!this.state.loading)
            return <div> ready to work </div>
        return (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={20}
                width={20}
                timeout={0}
            />
        )
    }
}

class Auto extends React.Component {

    constructor (props) {
        super(props)
        this.cityNames = [ ...new Set(cities.map(obj => {
            return obj.name
        }))]
        this.state = {
            value: '',
        }
        this.handleInput = evt => {
            const value = evt.target.value
            this.handleInputDebounced({value});
        }
        this.handleInputThrottled = throttle(200, this.setState)
        this.handleInputDebounced = debounce(20, this.handleInputThrottled)
    }

    render() {
        return (
            <div>
                <Waiting />
                <button onClick={() =>
                    locationOnClick(cities, this.props.data, setStateOfWaiting)
                }>
                    get weather by location
                </button>
                <button id='getByCity' onClick={() =>
                    cityOnClick(cities, this.props.data, this.state.value, setStateOfWaiting)
                }>
                    get weather by city
                </button>
                <ReactAutocomplete
                    items={this.cityNames}
                    shouldItemRender={(item, value) => {
                        item = item.toLowerCase()
                        value = value.toLowerCase()
                        return item.indexOf(value) === 0
                    }}
                    getItemValue={item => item}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                        >
                            {item}
                        </div>
                    }
                    value={this.state.value}
                    onChange={e => this.handleInput(e)}
                    onSelect={value => this.setState({ value })}
                />
            </div>
        )
    }
}

export default Auto