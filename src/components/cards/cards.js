import React from 'react'
import {connect} from 'react-redux'

import Card from '../card'
import {itemsLoaded} from '../../actions'
import ApartmentsService from '../../services/apartments-service'

import './cards.less'

class Cards extends React.Component{
    apartmentsService = new ApartmentsService()

    // componentDidMount(){
    //     const {fetchItems} = this.props
    //     this.apartmentsService
    //     .getItems(this.props)
    //     .then(result => {
    //         fetchItems(result)
    //     })
    // }

    render(){
        const {items, viewType} = this.props

        if(viewType !== 'cards') {
            return null
        }
        return(
            <div className="cards-wrapper">
                <div className="container p-0">
                    <div className="row">
                        {items.map(item => {
                            return <Card key={item.id} item={item}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({items, viewType, priceMin, priceMax, squareMin, squareMax, complexName, roomValues}) => {
    return {
        items,
        viewType
        // pricemin: priceMin, 
        // pricemax: priceMax, 
        // smin:squareMin, 
        // smax: squareMax, 
        // complex: complexName, 
        // rooms: roomValues
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchItems: (items) => dispatch(itemsLoaded(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)