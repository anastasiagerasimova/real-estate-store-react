import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'

import {withApartmentsService} from '../hoc'
import {addedComplex, addedRooms, 
        addedPriceMin, addedPriceMax, 
        addedSquareMin, addedSquareMax, 
        resetedFilter
    } from '../../actions'
import Button from '../button'
import Input from '../input'
import Select from '../select'

import './filter.less'

class Form extends React.Component{
    inputSqMinRef = React.createRef(null)
    inputSqMaxRef = React.createRef(null)
    inputPriceMin = React.createRef(null)
    inputPriceMax = React.createRef(null)
    state = {
        itemsValue: 0
    }

    componentDidMount(){
        const {apartmentsService} = this.props
        const searchParams = apartmentsService.getSearchParams(this.props)

        apartmentsService
            .getItems(`?${searchParams}`)
            .then(result => {
                this.setState({itemsValue: result.length})
            })
    }

    componentDidUpdate(prevProps){
        const {apartmentsService} = this.props
        if(prevProps !== this.props){
            const searchParams = apartmentsService.getSearchParams(this.props)
            apartmentsService
                .getItems(`?${searchParams}`)
                .then(result => {
                    this.setState({itemsValue: result.length})
                })
        }
    }

    onSubmit = (e) => {
        const {getSearchParams, apartmentsService} = this.props
        e.preventDefault()

        const searchParams = apartmentsService.getSearchParams(this.props)
        getSearchParams(searchParams)
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

    render(){
        const {
            complex, rooms, 
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
                                {text: "Все проекты", value: "all", selected:true},
                                {text: "ЖК Генеральский", value: "Генеральский"},
                                {text: "ЖК Речной", value: "Речной"},
                                {text: "ЖК Лесной", value: "Лесной"},
                                {text: "ЖК Квантум", value: "Квантум"}
                            ]}
                            onChange={(e) => {
                                e.preventDefault()
                                onAddeComplex(e.target.value)
                            }}
                            value={complex}
                        />
                    </div>
                    <div className="filter__col rooms">
                        <div className="filter__label">Комнат:</div>
                        <div 
                            className="rooms__wrapper"
                            onClick={(e) => {
                                if(e.target.name === "rooms"){
                                    e.target.checked
                                    onAddedRooms(e.target.value)
                                }
                            }}
                        >
                            <Input 
                                name={"rooms"} 
                                type={"checkbox"} 
                                className={"rooms__checkbox"} 
                                value={"1"} 
                                label={"1"} 
                                // checked={rooms.includes("1")} 
                                defaultChecked={rooms.includes("1")} 
                                // onChange={(e)=> onAddedRooms(e.target.value)}
                            />
                            <Input 
                                name={"rooms"} 
                                type={"checkbox"} 
                                className={"rooms__checkbox"} 
                                value={"2"} 
                                label={"2"} 
                                // checked={rooms.includes("2")}
                                defaultChecked={rooms.includes("2")} 
                                // onChange={(e)=> onAddedRooms(e.target.value)}
                            />
                            <Input 
                                name={"rooms"} 
                                type={"checkbox"} 
                                className={"rooms__checkbox"} 
                                value={"3"} 
                                label={"3"} 
                                // checked={rooms.includes("3")}
                                defaultChecked={rooms.includes("3")} 
                                // onChange={(e)=> onAddedRooms(e.target.value)}
                            />
                            <Input 
                                name={"rooms"} 
                                type={"checkbox"} 
                                className={"rooms__checkbox"} 
                                value={"4"} 
                                label={"4"} 
                                // checked={rooms.includes("4")}
                                defaultChecked={rooms.includes("4")} 
                                // onChange={(e)=> onAddedRooms(e.target.value)}
                            />
                            <Input 
                                name={"rooms"} 
                                type={"checkbox"} 
                                className={"rooms__checkbox"} 
                                value={"5"} 
                                label={"5"} 
                                // checked={rooms.includes("5")}
                                defaultChecked={rooms.includes("5")} 
                                // onChange={(e)=> onAddedRooms(e.target.value)}
                            />
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

const mapStateToProps = ({searchParams: {priceMin, priceMax, squareMin, squareMax, complexName, roomValues}}) => {
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
        onResetedFilter: () => dispatch(resetedFilter())
    }
}

export default compose(
    withApartmentsService,
    connect(mapStateToProps, mapDispatchToProps)
)(Form)
