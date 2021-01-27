import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import {withApartmentsService} from '../hoc'
// import compose from '../../utils/compose'
import Card from '../card'
import {fetchItems} from '../../actions'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './cards.less'

const Cards = ({items, onItemSelected}) => {
    return (
        <div className="row">
            {items.map(item => {
                return <Card key={item.id} item={item} onItemSelected={onItemSelected}/>
            })}
        </div>
    )
}

class CardsContainer extends React.Component{

    componentDidMount(){
        const {fetchItems} = this.props
        fetchItems()
    }

    componentDidUpdate(prevProps){
        const {fetchItems} = this.props

        if(prevProps.location.search !== this.props.location.search){
            fetchItems()
        }
    }

    render(){
        const {items, viewType, onItemSelected, cardsLoading, cardsError} = this.props
        if(viewType !== 'cards') {
            return null
        }

        const spinner = cardsLoading ? <Spinner /> : null;
        const content = (!cardsLoading && !cardsError) ? <Cards items={items} onItemSelected={onItemSelected} {...this.props}/> : null;
        const errorMessage = cardsError ? <ErrorIndicator/> : null;

        return(
            <div className="cards-wrapper">
                <div className="container p-0">
                    {spinner}
                    {content}
                    {errorMessage}
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({itemList: {items, viewType, itemsLoading, itemsError}}) => {
    return {
        items,
        viewType,
        cardsLoading: itemsLoading,
        cardsError: itemsError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {apartmentsService, location} = ownProps
    return{
        fetchItems: () => dispatch(fetchItems(apartmentsService, location)()),
    }
}

export default compose(
    withRouter,
    withApartmentsService,
    connect(mapStateToProps, mapDispatchToProps)
)(CardsContainer)