import React from "react";
import {modeAction} from "./action";
import {connect} from "react-redux";
import {selectorMode} from "./selector";

const Mode = ({mode, changeMode}) => (
    <div className='Mode'>
        <button onClick={() => {changeMode(mode)}}>Change mode
        </button>
    </div>
)

const mapStateToProps = state => ({
    mode: selectorMode(state)
})

const mapDispatchToProps = dispatch => ({
    changeMode: mode => {dispatch(modeAction(mode))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Mode)
