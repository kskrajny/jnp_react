import React from "react";

const Mode = ({modeType, changeMode}) => (
    <div className='Mode'>
        <button onClick={() => {changeMode(modeType)}}>Change mode</button>
    </div>
)

export default Mode
