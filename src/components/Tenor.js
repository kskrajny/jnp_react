import React from "react";
import TenorStyle from "../style/TenorStyle";

const Tenor = ({tenor}) => {
    if(tenor.current === undefined || tenor.images.length === 0)
        return <TenorStyle alt=''/>
    return <TenorStyle src={tenor.images[tenor.current]} alt=''/>
}

export default Tenor