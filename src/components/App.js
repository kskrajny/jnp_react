import React from "react"
import Forecast from '../containers/Forecast'
import Menu from './Menu'
import AppStyle from '../style/AppStyle'
import TenorStyle from '../style/TenorStyle'

const App = ({mode}) => (
    <AppStyle mode={mode}>
        <Menu />
        <TenorStyle id='tenor' alt=''/>
        <Forecast />
    </AppStyle>
)

export default App