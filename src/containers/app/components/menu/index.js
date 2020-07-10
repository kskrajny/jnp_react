import React from 'react'
import Autocomplete from '../../../autocomplete'
import Mode from '../../../mode'
import Loader from '../../../loader'
import Search from '../../../search'
import MenuStyle from '../menustyle'
import Duration from '../duration'

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