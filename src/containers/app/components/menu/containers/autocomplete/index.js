import React from 'react';
import ReactAutocomplete from 'react-autocomplete'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {autoAction} from "./action";
import {connect} from "react-redux";
import {selectorAuto} from "./selector";

const Autocomplete = ({auto, changeAutoArray}) => (
    <div>
        <ReactAutocomplete
            items={auto.arr}
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
            value={auto.input}
            onChange={event => changeAutoArray(event.target.value)}
            onSelect={input => changeAutoArray(input)}
        />
    </div>
)

const mapStateToProps = state => ({
    auto: selectorAuto(state)
})

const mapDispatchToProps = dispatch => ({
    changeAutoArray: (input) => dispatch(autoAction(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete)