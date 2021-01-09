import React from 'react'
import {connect} from 'react-redux'

import Item from '../item'

import './list.less'

class List extends React.Component{
    render(){
        const {items, viewType} = this.props

        if(viewType !== 'list') {
            return null
        }
        return(
            <div className="panels-wrapper">
                <div className="container p-0">
                    <div className="panels-filter">
                        <div
                            className="panels-filter__element"
                            style={{width: '120px'}}
                        >
                            <div className="panels-filter__name no-filter">
                                Артикул
                            </div>
                        </div>
                        <div
                            className="panels-filter__element"
                            style={{width: '160px'}}
                        >
                            <div className="panels-filter__name">ЖК</div>
                        </div>
                        <div
                            className="panels-filter__element"
                            style={{width: '70px'}}
                        >
                            <div className="panels-filter__name no-filter">
                                Корпус
                            </div>
                        </div>
                        <div
                            className="panels-filter__element"
                            style={{width: '70px'}}
                        >
                            <div className="panels-filter__name no-filter">
                                Этаж
                            </div>
                        </div>
                        <div
                            className="panels-filter__element"
                            style={{width: '70px'}}
                        >
                            <div className="panels-filter__name">Комнат</div>
                        </div>
                        <div
                            className="panels-filter__element"
                            style={{width: '80px'}}
                        >
                            <div className="panels-filter__name">Площадь</div>
                        </div>
                        <div
                            className="panels-filter__element"
                            style={{width: '100px'}}
                        >
                            <div className="panels-filter__name">м2</div>
                        </div>
                        <div
                            className="panels-filter__element"
                            style={{width: '100px'}}
                        >
                            <div className="panels-filter__name">Стоимость</div>
                        </div>

                        <div
                            className="panels-filter__element"
                            style={{width: '100px'}}
                        >
                            <div className="panels-filter__name no-filter">
                                Избранное
                            </div>
                        </div>
                    </div> 

                    {items.map(item => {
                            return <Item key={item.id} item={item}/>
                        })
                    }
                </div>
            </div>
        )

    }
}


const mapStateToProps = ({items, viewType}) => {
    return {
        items,
        viewType
    }
}

export default connect(mapStateToProps)(List)