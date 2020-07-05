import styled from 'styled-components'
import {theme} from 'styled-tools'

const AppStyle = styled.div`
    text-align: center;
    height: 100vh;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr;
    grid-template-rows: 100px 200px 1fr 100px;
    background-color: ${props => theme('backgroundColor.'+props.mode)};
    color: ${props => theme('color.'+props.mode)};
`

export default AppStyle