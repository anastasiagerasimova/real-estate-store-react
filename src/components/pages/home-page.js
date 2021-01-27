import React from 'react'
import {withRouter} from 'react-router-dom'

import Filter from '../filter'
import ViewPanel from '../view-panel'
import Cards from '../cards'
import List from '../list'

// const HomePage = ({history}) => {
//     console.log(history)
//     return(
//         <div className="">
//             <Filter />
//             <ViewPanel />
//             <List />
//             <Cards onItemSelected={(itemId) => history.push(`/item/${itemId}`)}/>
//         </div>
//     )
// }

// export default withRouter(HomePage)

class HomePage extends React.Component{

    render(){
        const{history, location} = this.props
        return(
            <div className="">
                <Filter 
                    getSearchParams={(searchParams) => {
                        if(location.search !== `?${searchParams}`){
                            history.push(`/?${searchParams}`)
                        }
                    }}
                />
                <ViewPanel />
                <List />
                <Cards onItemSelected={(itemId) => history.push(`/item/${itemId}`)}/>
            </div>
        )
    }
}

export default withRouter(HomePage)