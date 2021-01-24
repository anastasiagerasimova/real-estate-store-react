import React from 'react'
import {connect} from 'react-redux'

import ApartmentsService from '../../services/apartments-service'
import {addedToFavorites, removedFromFavorites} from '../../actions'
import Modal from '../modal'
import Button from '../button'

import './single-item.less'

class SingleItem extends React.Component{
    apartmentsService = new ApartmentsService()
    state = {
        item: {},
        modelOpened: false
    }

    componentDidMount(){
        const {selectedItemId} = this.props
        this.apartmentsService
            .getItem(selectedItemId)
            .then((result) => {
                this.setState({item: result})
            })
    }

    

    onOpenedModal = () => {
        this.setState((state) => {
            return{
                modelOpened: !state.modelOpened
            }
        })
    }

    render() {
        const {favorites, onAddedToFavorites, onRemovedFromFavorites} = this.props
        const {item: {id, title, square, price_sq_m, price_total, complex_name, scu,  building, floor, flat_number, rooms, image}} = this.state
        const {item, modelOpened} = this.state
        const checkInFavorites = (id) => {
            return favorites.some(item => item.id === id)
        }
 
        return(
            <React.Fragment>
            <div className="container p-0">
                <div className="heading-1">
                    {title}, {square} м2 за {price_total} ₽
                </div>
    
    
                <div className="object">
    
                    <div className="object__photo">
                        <div className="object__photo-wrapper">
                            <img src={image} alt="" />
                        </div>
                    </div>
    
                    <div className="object__desc">
                        <div className="object__desc-sector">
                            ЖК {complex_name}
                        </div>
    
                        <div className="object__desc-name">
                            <div className="object__desc-title">
                                {title}, {square} м2
                            </div>
                            <div className="object__desc-art">{scu}</div>
                            {
                                checkInFavorites(id) 
                                ? (
                                    <Button
                                        className={"button-favourite button-favourite--active"}
                                        onClick={() => onRemovedFromFavorites(item)}
                                    >
                                        <i className="fas fa-heart"></i> <span>В избранном</span>
                                    </Button>
                                )
                                :(
                                    <Button
                                        className={"button-favourite"} 
                                        onClick={() => onAddedToFavorites(item)}
                                    >
                                        <i className="fas fa-heart"></i> <span>В избранное</span>
                                    </Button>
                                )
                            }
                        </div>
    
                        <div className="object__desc-details">
    
                            <div className="params">
                                <div className="params__item">
                                    <div className="params__definition">Корпус</div>
                                    <div className="params__value">{building}</div>
                                </div>
                                <div className="params__item">
                                    <div className="params__definition">Этаж</div>
                                    <div className="params__value">{floor}</div>
                                </div>
                                <div className="params__item">
                                    <div className="params__definition">Номер</div>
                                    <div className="params__value">{flat_number}</div>
                                </div>
                                <div className="params__item">
                                    <div className="params__definition">Комнат</div>
                                    <div className="params__value">{rooms}</div>
                                </div>
                            </div>
                        </div>
    
                        <div className="details">
                            <div className="details__row">
                                <div className="details__name">Стоимость</div>
                                <div
                                    className="details__value details__value--price"
                                >
                                    {price_total} ₽
                                </div>
                            </div>
                            <div className="details__row">
                                <div className="details__name">Цена за м2</div>
                                <div className="details__value">{price_sq_m} ₽/м2</div>
                            </div>
                            <div className="details__row">
                                <div className="details__name">Площадь</div>
                                <div className="details__value">{square} м2</div>
                            </div>
                        </div>
    
                        <Button
                            className={"button-order"} 
                            onClick={() => this.onOpenedModal()}
                        >
                            Забронировать
                        </Button>
                    </div>
    
                </div>
    
            </div>
            {modelOpened ? <Modal onOpenedModal={this.onOpenedModal} {...this.state}/> : null}
            </React.Fragment>
        )  
    }
}

const mapStateToProps = ({favorites}) => {
    return{
        favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToFavorites: (item) => dispatch(addedToFavorites(item)),
        onRemovedFromFavorites: (item) => dispatch(removedFromFavorites(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)