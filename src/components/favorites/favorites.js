import React from 'react'
import {connect} from 'react-redux'

import Card from '../card'

import './favorites.less'

class Favorites extends React.Component{

    render() {
        const {favorites} = this.props
  
        return (
            <React.Fragment>
                <div className="container p-0">
                    <div className="heading-1">Избранное</div>
                </div>
                <div className="cards-wrapper">
                    <div className="container p-0">
                        <div className="row">
                            {favorites.map(item => <Card key={item.id} item={item}/>)}
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

export default connect(mapStateToProps)(Favorites)