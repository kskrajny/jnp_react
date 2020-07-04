import styled from 'styled-components'
import { getMode } from '../functions/consts'

const AppStyle = styled.div`
    text-align: center;
    height: 100vh;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr;
    grid-template-rows: 100px 200px 1fr 100px;
    background-color: ${props => getMode(props.mode).backgroundColor};
    color: ${props => getMode(props.mode).color};
`

export default AppStyle