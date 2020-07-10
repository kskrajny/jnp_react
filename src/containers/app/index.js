import React from "react"
import {connect} from "react-redux";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes';
import Forecast from '../forecast'
import Tenor from '../tenor'
import Menu from './components/menu'
import AppStyle from "./components/appstyle";
import {selectorMode} from "./selector";

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