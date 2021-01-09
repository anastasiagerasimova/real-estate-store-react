import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'

import {addedComplex, addedRooms, 
        addedPriceMin, addedPriceMax, 
        addedSquareMin, addedSquareMax, 
        itemsLoaded, resetedFilter
    } from '../../actions'
import Button from '../button'
import Input from '../input'
import Select from '../select'
import ApartmentsService from '../../services/apartments-service'

import './form.less'

class Form extends React.Component{
    inputSqMinRef = React.createRef(null)
    inputSqMaxRef = React.createRef(null)
    inputPriceMin = React.createRef(null)
    inputPriceMax = React.createRef(null)
    apartmentsService = new ApartmentsService()
    state = {
        itemsValue: 18
    }

    componentDidMount(){
        const {fetchItems} = this.props
        this.apartmentsService
        .getItems(this.props)
        .then(result => {
            fetchItems(result)
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.apartmentsService
                .getItems(this.props)
                .then(result => {
                    this.setState({itemsValue: result.length})
                })
        }
    }

    onSubmit = (e) => {
        const {fetchItems} = this.props
        e.preventDefault()
        this.apartmentsService
            .getItems(this.props)
            .then(result => {
                fetchItems(result)
            })
    }

    onReset = (e) => {
        const {onResetedFilter} = this.props
        e.preventDefault()
        onResetedFilter()
        this.inputSqMinRef.current.value = ""
        this.inputSqMaxRef.current.value = ""
        this.inputPriceMax.current.value = ""
        this.inputPriceMin.current.value = ""
    }

    onResetForm = () => {

    }

    render(){
        const {
            pricemin, pricemax, sqmin, sqmax, complex, rooms, 
            onAddeComplex, onAddedRooms, onAddedPriceMin, onAddedPriceMax, onAddedSquareMin, onAddedSquareMax
        } = this.props

        return(
            <form method="GET" className="container p-0"  >
                <div className="heading-1">Выбор квартир:</div>
                <div className="filter">
                    <div className="filter__col">
                        <div className="filter__label">Выбор проекта:</div>
                        <Select 
                            name={"complex"}
                            className={"filter__dropdown"}
                            options={[
                                {text: "Все проекты", value: "all"},
                                {text: "ЖК Генеральский", value: "Генеральский", selected:true},
                                {text: "ЖК Речной", value: "Речной"},
                                {text: "ЖК Лесной", value: "Лесной"},
                                {text: "ЖК Квантум", value: "Квантум"}
                            ]}
                            onChange={(e) => {onAddeComplex(e.target.value)}}
                            value={complex}
                        />
                    </div>
                    <div className="filter__col rooms">
                        <div className="filter__label">Комнат:</div>
                        <div className="rooms__wrapper"
                            onChange={(e)=> {onAddedRooms(e.target.value)}}
                        >
                            <Input name={"rooms"} type={"checkbox"} className={"rooms__checkbox"} value={"1"} label={"1"} checked={rooms.includes("1")}/>
                            <Input name={"rooms"} type={"checkbox"} className={"rooms__checkbox"} value={"2"} label={"2"} checked={rooms.includes("2")}/>
                            <Input name={"rooms"} type={"checkbox"} className={"rooms__checkbox"} value={"3"} label={"3"} checked={rooms.includes("3")}/>
                            <Input name={"rooms"} type={"checkbox"} className={"rooms__checkbox"} value={"4"} label={"4"} checked={rooms.includes("4")}/>
                            <Input name={"rooms"} type={"checkbox"} className={"rooms__checkbox"} value={"5"} label={"5"} checked={rooms.includes("5")}/>
                        </div>
                    </div>
                    <div className="filter__col">
                        <div className="filter__label">Площадь:</div>
                        <div className="range__wrapper">
                            <div className="range" >
                                <Input 
                                    min={"0"} 
                                    dir={"start"} 
                                    name={"sqmin"} 
                                    type={"number"} 
                                    className={"range__input"} 
                                    label={"от"} 
                                    placeholder={"38"}
                                    onChange={(e)=>{onAddedSquareMin(e.target.value)}}
                                    ref={this.inputSqMinRef}
                                />
                                <div className="range__value">м2</div>
                            </div>
                            <div className="range">
                                <Input 
                                    min={"0"} 
                                    dir={"start"} 
                                    name={"sqmax"} 
                                    type={"number"} 
                                    className={"range__input"} 
                                    label={"до"} 
                                    placeholder={"120"}
                                    onChange={(e)=>{onAddedSquareMax(e.target.value)}}
                                    ref={this.inputSqMaxRef}
                                />
                                <div className="range__value">м2</div>
                            </div>
                        </div>
                    </div>
                    <div className="filter__col">
                        <div className="filter__label">Стоимость:</div>
                        <div className="range__wrapper">
                            <div className="range">
                                <Input 
                                    min={"0"} 
                                    dir={"start"} 
                                    name={"pricemin"} 
                                    type={"number"} 
                                    className={"range__input range__input--price"} 
                                    label={"от"} 
                                    placeholder={"2325000"}
                                    onChange={(e)=>{onAddedPriceMin(e.target.value)}}
                                    ref={this.inputPriceMin}
                                />
                                <div className="range__value">₽</div>
                            </div>
                            <div className="range">
                                <Input 
                                    min={"0"} 
                                    dir={"start"} 
                                    name={"pricemax"} 
                                    type={"number"} 
                                    className={"range__input range__input--price"} 
                                    label={"до"} 
                                    placeholder={"4525000"}
                                    onChange={(e)=>{onAddedPriceMax(e.target.value)}}
                                    ref={this.inputPriceMax}
                                />
                                <div className="range__value">₽</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter__buttons">
                    <Button  className={"filter__show"} onClick={(e) => this.onSubmit(e)}>Показать {this.state.itemsValue} объектов</Button>
                    <Button className={"filter__reset"} onClick={(e) => this.onReset(e)}>Сбросить фильтр</Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = ({priceMin, priceMax, squareMin, squareMax, complexName, roomValues}) => {
    return{
        pricemin: priceMin, 
        pricemax: priceMax, 
        sqmin:squareMin, 
        sqmax: squareMax, 
        complex: complexName, 
        rooms: roomValues
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddeComplex: (complex) => dispatch(addedComplex(complex)),
        onAddedRooms: (rooms) => dispatch(addedRooms(rooms)),
        onAddedPriceMin: (price) => dispatch(addedPriceMin(price)),
        onAddedPriceMax: (price) => dispatch(addedPriceMax(price)),
        onAddedSquareMin: (square) => dispatch(addedSquareMin(square)),
        onAddedSquareMax: (square) => dispatch(addedSquareMax(square)),
        fetchItems: (items) => dispatch(itemsLoaded(items)), 
        onResetedFilter: () => dispatch(resetedFilter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

