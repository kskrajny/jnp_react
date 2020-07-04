import React from "react";

const Mode = ({mode, changeMode}) => (
    <div className='Mode'>
        <button onClick={() => {changeMode(mode)}}>Change mode</button>
    </div>
)

export default Mode
