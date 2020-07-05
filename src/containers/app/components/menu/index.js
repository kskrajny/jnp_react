import React from 'react'
import Autocomplete from './containers/autocomplete'
import Mode from './containers/mode'
import Loader from './containers/loader'
import Search from './containers/search'
import MenuStyle from './components/menustyle'
import Duration from './components/duration'

const Menu = () => (
    <MenuStyle>
        <Mode />
        <Loader />
        <Duration />
        <Search />
        <Autocomplete />
    </MenuStyle>
)

export default Menu