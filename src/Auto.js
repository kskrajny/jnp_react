import React from 'react';
import ReactAutocomplete from 'react-autocomplete'
import { cityOnClick } from './functions';
import { throttle, debounce } from "throttle-debounce";

class Auto extends React.Component {

    constructor (props) {
        super(props)
        this.cityNames = this.props.cities.map(obj => {
            return obj.name
        }).slice(1, 100)
        this.state = {
            value: ''
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
                <button id='getByCity' onClick={() => cityOnClick(this.props.cities, this.props.data, this.state.value)}>
                    get weather by city
                </button>
                <ReactAutocomplete
                    items={this.cityNames}
                    shouldItemRender={(item, value) => {
                        item = item.toLowerCase()
                        value = value.toLowerCase()
                        if(value.length > item.length) return false
                        for(let i=0;i<value.length;i++) {
                            if(item[i] !== value[i])
                                return false
                        }
                        return true
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