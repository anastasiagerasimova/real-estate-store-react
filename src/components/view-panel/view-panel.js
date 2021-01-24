import React from 'react'
import {connect} from 'react-redux'

import {setViewType, sortedItems} from '../../actions'
import Select from '../select'
import Input from '../input'

import './view-panel.less'

class ViewPanel extends React.Component{
    render(){
        const {onSetViewType, onSortedItems} = this.props
        return(
            <div className="view-options-wrapper">
                <div className="container">
                    <div className="view-options">
                        <div className="view-options__sort">
                            {/* <label
                                for="sort-cards-by"
                                className="view-options__label"
                                >Сортировать</label> */}
                            <Select 
                                name={"sortby"}
                                className={"view-options__select"}
                                options={[
                                    {text: "по цене ↑", value: "priceASC"},
                                    {text: "по цене ↓", value: "priceDESC"},
                                    {text: "по площади ↑", value: "squareASC"},
                                    {text: "по площади ↓", value: "squareDESC"}
                                ]}
                                label={"Сортировать"}
                                onChange = {(e) => {
                                    onSortedItems(e.target.value)
                                }}
                            />
                        </div>
                        <div 
                            className="view-options__type" 
                            onClick={(e)=> {
                                if(e.target.name === "displayType") {
                                    onSetViewType(e.target.value)
                                }
                            }}
                        >
                            <Input
                                type={"radio"}
                                className={"view-options__radio"}
                                name={"displayType"}
                                value={"cards"}
                                defaultChecked={true}
                                label={<i className="fas fa-th-large"></i>}
                            />
                            <Input
                                type={"radio"}
                                className={"view-options__radio"}
                                name={"displayType"}
                                value={"list"}
                                label={<i className="fas fa-bars"></i>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({viewType}) => {
    return {
        viewType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetViewType: (type) => {dispatch(setViewType(type))},
        onSortedItems: (value) => {dispatch(sortedItems(value))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPanel)