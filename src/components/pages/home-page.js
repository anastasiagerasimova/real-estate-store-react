import React from 'react'

import Filter from '../filter'
import ViewPanel from '../view-panel'
import Cards from '../cards'
import List from '../list'

const HomePage = () => {
    return(
        <div className="">
            <Filter />
            <ViewPanel />
            <List />
            <Cards />
        </div>
    )
}

export default HomePage