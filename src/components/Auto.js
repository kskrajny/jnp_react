import React from 'react';
import ReactAutocomplete from 'react-autocomplete'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Auto = ({auto, changeAutoArray}) => (
    <div className='Auto'>
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

export default Auto