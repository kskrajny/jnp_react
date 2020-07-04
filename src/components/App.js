import React from "react";
import Forecast from '../containers/Forecast';
import Menu from './Menu';
import '../stylesheets/App.css';

const App = ({style}) => (
    <div className='App' style={style}>
        <Menu />
        <Forecast />
    </div>
)

export default App