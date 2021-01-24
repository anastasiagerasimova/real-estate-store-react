import React from 'react'

import Bids from '../bids'
import Pagination from '../pagination'

// const BidsPage = () => {
//     return(
//         <React.Fragment>
//             <Bids />
//             <Pagination />
//         </React.Fragment>
//     )

// }

class BidsPage extends React.Component{
    state = {
        currentPage: 1,
    }

    setCurrentPage = (page) => {
        this.setState({
            currentPage: page
        })
    }

    render(){
        const {currentPage} = this.state
        // console.log(currentButton)
        return(
            <React.Fragment>
                <Bids currentPage={currentPage}/>
                <Pagination setCurrentPage={this.setCurrentPage}/>
            </React.Fragment>
        )
    }
}

export default BidsPage