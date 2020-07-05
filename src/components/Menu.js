import React from 'react'
import Auto from '../containers+selectors/Auto'
import Mode from '../containers+selectors/Mode'
import Spin from '../containers+selectors/Spin'
import Search from '../containers+selectors/Search'
import MenuStyle from '../style/MenuStyle'

const Menu = () => (
    <MenuStyle>
        <Mode />
        <Spin />
        <select name="type" id="type">
                <option value="hourly">2/h</option>
                <option value="daily">7/d</option>
        </select>
        <Search />
        <Auto />
    </MenuStyle>
)

export default Menu