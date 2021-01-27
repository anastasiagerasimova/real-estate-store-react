import React from 'react'
// import {Link} from 'react-router-dom'

const Card = (props) => {
    const {complex_name, image, price_total, price_sq_m, rooms, square, floor, floors_total, scu, id} = props.item
    const {onItemSelected} = props
    return  (
        <article className="col-md-4">
            <div className="card" onClick={() => onItemSelected(id)}>
                <div className="card__header">
                    <div className="card__title">
                        ЖК {complex_name}
                    </div>
                    <div className="card__like" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
                <div className="card__img">
                    <img src={image} alt="План квартиры" />
                </div>
                <div className="card__desc">
                    <div className="card__price">
                        <div className="card__price-total">
                            {price_total} ₽
                        </div>
                        <div className="card__price-per-meter">
                            {price_sq_m} ₽/м2
                        </div>
                    </div>


                    <div className="card__params params">
                        <div className="params__item">
                            <div className="params__definition">
                                Комнат
                            </div>
                            <div className="params__value">{rooms}</div>
                        </div>
                        <div className="params__item">
                            <div className="params__definition">
                                Площадь
                            </div>
                            <div className="params__value">{square}</div>
                        </div>
                    </div>

                </div>
                <div className="card__footer">
                    <div className="card__art">{scu}</div>
                    <div className="card__floor">Этаж {floor} из {floors_total}</div>
                </div>
            </div>
        </article>
    )
}

export default Card