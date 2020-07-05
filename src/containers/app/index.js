import React from "react"
import {connect} from "react-redux";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes';
import Forecast from './containers/forecast'
import Tenor from './containers/tenor'
import Menu from './components/menu'
import {selectorMode} from "./selector";
import AppStyle from "./components/appstyle";

const App = ({mode}) => (
    <ThemeProvider theme={theme}>
        <AppStyle mode={mode}>
            <Menu/>
            <Tenor/>
            <Forecast/>
        </AppStyle>
    </ThemeProvider>
)


const mapStateToProps = state => ({
    mode: selectorMode(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)