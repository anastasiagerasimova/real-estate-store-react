import React from 'react'
// import {Link} from 'react-router-dom'

const Item = (props) => {
    const {complex_name, price_total, price_sq_m, rooms, square, floor, floors_total, scu} = props.item
    return (
        <div className="panel">
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
                <button className="panel__favourite-btn">
                    <i className="fas fa-heart"></i>
                </button>
            </div>
        </div> 
    )
}

export default Item