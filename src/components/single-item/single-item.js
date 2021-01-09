import React from 'react'

import './single-item.less'

const SingleItem = () => {
    return(

        <div className="container p-0">
            <div className="heading-1">
                Квартира Студия, 45,5 м2 за 4 250 000 ₽
            </div>


            <div className="object">

                <div className="object__photo">
                    <div className="object__photo-wrapper">
                        <img src="img/slider-item/photo.png" alt="" />
                    </div>
                </div>

                <div className="object__desc">
                    <div className="object__desc-sector">
                        ЖК Генеральский
                    </div>

                    <div className="object__desc-name">
                        <div className="object__desc-title">
                            Студия, 45,5 м2
                        </div>
                        <div className="object__desc-art">ГЕН-112-42</div>

                        {/* Добавить в избранное */}
                        <button className="button-favourite">
                            <i className="fas fa-heart"></i> <span>В избранное</span>
                        </button>

                        {/* В Избранном */}
                        <button className="button-favourite button-favourite--active">
                            <i className="fas fa-heart"></i> <span>В избранном</span>
                        </button>

                    </div>

                    <div className="object__desc-details">

                        <div className="params">
                            <div className="params__item">
                                <div className="params__definition">Корпус</div>
                                <div className="params__value">3</div>
                            </div>
                            <div className="params__item">
                                <div className="params__definition">Этаж</div>
                                <div className="params__value">8</div>
                            </div>
                            <div className="params__item">
                                <div className="params__definition">Номер</div>
                                <div className="params__value">121</div>
                            </div>
                            <div className="params__item">
                                <div className="params__definition">Комнат</div>
                                <div className="params__value">2</div>
                            </div>
                        </div>

                    </div>

                    <div className="details">
                        <div className="details__row">
                            <div className="details__name">Стоимость</div>
                            <div
                                className="details__value details__value--price"
                            >
                                4 200 000 ₽
                            </div>
                        </div>
                        <div className="details__row">
                            <div className="details__name">Цена за м2</div>
                            <div className="details__value">64 000 ₽/м2</div>
                        </div>
                        <div className="details__row">
                            <div className="details__name">Площадь</div>
                            <div className="details__value">60 м2</div>
                        </div>
                    </div>

                    <button className="button-order">Забронировать</button>
                    <button className="button-preview">Записаться на просмотр</button>
                </div>

            </div>

        </div>
    )
}

export default SingleItem