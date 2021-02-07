import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'

import Card from '../card'
import {removedFromFavorites, addedToFavorites} from '../../actions'
import {withFavoritesMethod} from '../hoc'

import './favorites.less'

class Favorites extends React.Component{
    state = {
        currentFavorites: []
    }

    componentDidMount(){
        const {favorites} = this.props
        this.setState({currentFavorites: favorites})
    }

    render() {
        const {currentFavorites} = this.state

        return (
            <React.Fragment>
                <div className="container p-0 mb-5">
                    <div className="heading-1">Избранное</div>
                </div>
                <div className="cards-wrapper">
                    <div className="container p-0">
                        <div className="row">
                            {currentFavorites.map(item => <Card key={item.id} item={item} favorites={currentFavorites} onRemovedFromFavorites={this.onRemovedFromFavorites} onAddedToFavorites={this.onAddedToFavorites} {...this.props}/>)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({itemList: {favorites}}) => {
    return {
        favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddedToFavorites: (item) => dispatch(addedToFavorites(item)),
        onRemovedFromFavorites: (item) => dispatch(removedFromFavorites(item))
    }
}

export default compose(
    withFavoritesMethod,
    connect(mapStateToProps, mapDispatchToProps)
)(Favorites)
