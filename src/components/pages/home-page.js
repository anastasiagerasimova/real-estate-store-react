import React from 'react'
import {withRouter} from 'react-router-dom'

import Filter from '../filter'
import ViewPanel from '../view-panel'
import Cards from '../cards'
import List from '../list'

class HomePage extends React.Component{

    render(){
        const{history, location} = this.props

        return(
            <div>
                <Filter 
                    getSearchParams={(searchParams) => {
                        if(location.search !== `?${searchParams}`){
                            history.push(`/?${searchParams}`)
                        }
                    }}
                />
                <ViewPanel />
                <List onItemSelected={(itemId) => history.push(`/item/${itemId}`)}/>
                <Cards onItemSelected={(itemId) => history.push(`/item/${itemId}`)}/>
            </div>
        )
    }
}

export default withRouter(HomePage)