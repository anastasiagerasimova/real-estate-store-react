import React from 'react'
// import {Link} from 'react-router-dom'

const Item = (props) => {
    const {item:{id, complex_name, price_total, price_sq_m, rooms, square, floor, floors_total, scu}, onItemSelected} = props
    const {favorites, item, onRemovedFromFavorites, onAddedToFavorites} = props
    const checkInFavorites = (id) => {
        return favorites.some(item => item.id === id)
    }
    
    return (
        <div
            className="panel" 
            onClick={(e)=> onItemSelected(id)}
        >
            <div className="panel__artikul">{scu}</div>
            <div className="panel__name">
                <div>ЖК {complex_name}</div>
            </div>
            <div className="panel__block">{floors_total}</div>
            <div className="panel__floor">{floor}</div>
            <div className="panel__rooms">{rooms}</div>
            <div className="panel__sq">{square} м2</div>
            <div className="panel__price-per-m">{price_sq_m} ₽</div>
            <div className="panel__price">{price_total} ₽</div>
            <div className="panel__favourite">
                <button 
                    className={`panel__favourite-btn ${checkInFavorites(id) ? 'panel__favourite-btn--active ' : ''}`} 
                    onClick={(e) => { 
                        e.preventDefault()
                        e.stopPropagation()
                        checkInFavorites(id) 
                        ? (onRemovedFromFavorites(item))
                        :(onAddedToFavorites(item))
                    }}
                >
                    <i className="fas fa-heart"></i>
                </button>
            </div>
        </div> 
    )
}

export default Item