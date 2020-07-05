import React from "react"
import Forecast from '../containers/Forecast'
import Tenor from '../containers/Tenor'
import Menu from './Menu'
import AppStyle from '../style/AppStyle'

const App = ({mode}) => (
    <AppStyle mode={mode}>
        <Menu />
        <Tenor />
        <Forecast />
    </AppStyle>
)

export default App