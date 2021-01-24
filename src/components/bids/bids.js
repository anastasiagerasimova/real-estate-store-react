import React from 'react'
import {connect} from 'react-redux'

import Bid from '../bid'
import ApartmentsService from '../../services/apartments-service'
import {bidsLoaded, bidsRequested} from '../../actions'

import './bids.less'

class Bids extends React.Component{
    apartmentsService = new ApartmentsService()

    componentDidMount(){
        const {fetchBids, onBidsRequested} = this.props
        onBidsRequested()
        this.apartmentsService
            .getBids()
            .then((result) => {
                fetchBids(result)
            })
    }

    render(){
        const {bids, currentPage, pages} = this.props
        const currentBidsArr = bids.slice(currentPage*pages - pages + 1, currentPage*pages + 1)
        return(
            <React.Fragment>
                <div className="container p-0 mb-5">
                    <div className="heading-1">Заявки</div>
                </div>

                <div className="panels-wrapper">
                    <div className="container p-0">

                    {
                        currentBidsArr.map(bid =>{
                            return <Bid key={bid.id} bid={bid}/>
                        })
                    }

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({bids, pages}) => {
    return{
        bids,
        pages
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchBids: (bids) => dispatch(bidsLoaded(bids)),
        onBidsRequested: () => dispatch(bidsRequested())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bids)