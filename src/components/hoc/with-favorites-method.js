import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'

import {removedFromFavorites, addedToFavorites} from '../../actions'

const withFavoritesMethod = (Comp) => {
    const Wrapper = (props) => (
        class extends React.Component{
            onAddedToFavorites(item){
                const {onAddedToFavorites} = this.props
                onAddedToFavorites(item)
            }
        
            onRemovedFromFavorites(item){
                const {onRemovedFromFavorites} = this.props
                onRemovedFromFavorites(item)
            }
            render(){
                return <Comp onRemovedFromFavorites={this.onRemovedFromFavorites} onAddedToFavorites={this.onAddedToFavorites} {...this.props}/>
            }
        }
    )
    return connect(mapStateToProps, mapDispatchToProps)(Wrapper())
}

function mapStateToProps({itemList: {favorites}}){
    return {favorites}
}

function mapDispatchToProps(dispatch){
    return{
        onAddedToFavorites: (item) => dispatch(addedToFavorites(item)),
        onRemovedFromFavorites: (item) => dispatch(removedFromFavorites(item))
    }
}

export default withFavoritesMethod
