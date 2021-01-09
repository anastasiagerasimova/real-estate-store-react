import React from 'react'

import Form from '../form'
import ViewPanel from '../view-panel'
import Cards from '../cards'
import List from '../list'

const HomePage = () => {
    return(
        <div className="">
            <Form />
            <ViewPanel />
            <List />
            <Cards />
        </div>
    )
}

export default HomePage