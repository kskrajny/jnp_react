import React from "react";
import TenorStyle from "../style/TenorStyle";

const Tenor = ({images, current}) => {
    if(current === undefined || images.length === 0)
        return <TenorStyle alt=''/>
    return <TenorStyle src={images[current]} alt=''/>
}

export default Tenor