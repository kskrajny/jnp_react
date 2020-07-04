import React from "react";
import Loader from "react-loader-spinner";

const Spin = ({loading}) => {
    if(!loading)
        return <div className='Spin'> ready to work </div>
    return (
        <div className='Spin'>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={20}
                width={20}
                timeout={0}
            />
        </div>
    )
}

export default Spin