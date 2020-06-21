import React from 'react';
import ReactAutocomplete from 'react-autocomplete'
import { cityOnClick } from "./functions";

class Auto extends React.Component {

    constructor (props) {
        super(props)
        this.cityNames = this.props.cities.map(obj => {
            return obj.name
        }).slice(1, 1000)
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <button id='getByCity' onClick={() => cityOnClick(this.props.cities, this.props.state, this.state.value)}>
                    get weather by city
                </button>
                <ReactAutocomplete
                    id='auto-city'
                    items={this.cityNames}
                    shouldItemRender={(item, value) => (item.toLowerCase().includes(value.toLowerCase()) && value.length > 0)}
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
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                />
            </div>
        )
    }
}

export default Auto