import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'

import {withApartmentsService} from '../hoc'
import Bid from '../bid'
import {fetchBids} from '../../actions'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './bids.less'

class BidsContainer extends React.Component{

    componentDidMount(){
        const {fetchBids} = this.props
        fetchBids()
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        const topScroll = window.scrollY;
        return {topScroll}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot.topScroll){
            window.scrollTo(0, 0)
        }
    }

    render(){
        const {bids, currentPage, pages, bidsLoading, error} = this.props
        const currentBidsArr = bids.slice(currentPage*pages - pages + 1, currentPage*pages + 1)

        const spinner = bidsLoading ? <Spinner /> : null
        const content = (!bidsLoading && !error) ? <Bids currentBidsArr={currentBidsArr}/> : null
        const errorMessage = error ? <ErrorIndicator /> : null

        return(
            <React.Fragment>
                <div className="container p-0 mb-5">
                    <div className="heading-1">Заявки</div>
                </div>

                <div className="panels-wrapper">
                    <div className="container p-0">
                        {spinner}
                        {content}
                        {errorMessage}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const Bids = ({currentBidsArr}) => {
    return (
        currentBidsArr.map(bid => {
            return <Bid key={bid.id} bid={bid}/>
        })
    )
}

const mapStateToProps = ({bidList: {bids, pages, bidsLoading, bidsError}}) => {
    return{
        bids,
        pages,
        bidsLoading,
        error: bidsError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {apartmentsService} = ownProps
    return{
        fetchBids: () => dispatch(fetchBids(apartmentsService)()),
    }
}

export default compose(
    withApartmentsService,
    connect(mapStateToProps, mapDispatchToProps)
)(BidsContainer)
