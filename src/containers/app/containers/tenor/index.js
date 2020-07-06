import React from "react";
import {connect} from "react-redux";
import TenorStyle from "./components/tenorstyle";
import {selectorTenor} from "./selector";

const Tenor = ({image}) => (
    <TenorStyle src={image} alt=''/>
)

const mapStateToProps = state => ({
    image: selectorTenor(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Tenor)