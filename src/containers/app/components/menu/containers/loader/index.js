import React from "react";
import Loader from "react-loader-spinner";
import {connect} from "react-redux";
import {selectorLoader} from "./selector";

const Load = ({loading}) => {
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

const mapStateToProps = state => ({
    loading: selectorLoader(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Load)