import React from 'react';
import ReactAutocomplete from 'react-autocomplete'
import {cityOnClick, locationOnClick} from './functionsOnEvent';
import { throttle, debounce } from "throttle-debounce";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

let cities = require('./city.list.json')

let cityNames = [ ...new Set(cities.map(obj => {
    return obj.name
}))].sort()

/* prepare structure to enhance autocomplete */
let division = []
let i = 0
const diValue = 500
while(i < cityNames.length) {
    let lastIndex = Math.min(i+diValue, cityNames.length)
    division.push({
        start: cityNames[i],
        end: cityNames[lastIndex-1],
        table: cityNames.slice(i, lastIndex)
    })
    i += diValue
}

function binarySearch(value, arr) {
    let first = 0;    //left endpoint
    let last = arr.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (arr[middle].start <= value && arr[middle].end >= value) {
            found = true;
            position = middle;
        } else if (arr[middle].start > value) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return position;
}

function getAutoArr(value) {
    let pos = binarySearch(value, division)
    let returnArr = new Array(...(division[pos].table))
    if(division.length > pos+1)
        returnArr.push(...(division[pos+1].table))
    return returnArr
}

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
        this.state = {
            value: '',
        }
        this.handleInput = evt => {
            const value = evt.target.value
            this.handleInputDebounced({value});
        }
        this.handleInputThrottled = throttle(30, this.setState)
        this.handleInputDebounced = debounce(10, this.handleInputThrottled)
    }

    render() {
        let autoArray = []
        if(this.state.value.length > 1)
            autoArray = getAutoArr(this.state.value)

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
                    items={autoArray}
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