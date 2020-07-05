import React from "react";
import {connect} from "react-redux";
import TenorStyle from "./components/tenorstyle";
import {selectorTenor} from "./selector";

const Tenor = ({tenor}) => {
    if(tenor.current === undefined || tenor.images.length === 0)
        return <TenorStyle alt=''/>
    return <TenorStyle src={tenor.images[tenor.current]} alt=''/>
}

const mapStateToProps = state => ({
    tenor: selectorTenor(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Tenor)