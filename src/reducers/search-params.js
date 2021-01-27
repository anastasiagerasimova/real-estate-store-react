const addRoomsValies = (arr, value) => {
    if(arr.includes(value)) {
        return [...arr.slice(0, arr.indexOf(value)), ...arr.slice(arr.indexOf(value) + 1)].sort()
    }else{
        return [...arr, value].sort()
    }
}

const updateSearchParams = (state, action) => {
    if(state === undefined){
        return {
            priceMin: 1872000,
            priceMax: 8610000,
            squareMin: 38,
            squareMax: 120,
            complexName: "all",
            roomValues:[]
        }
    }
    switch(action.type){
        case 'ADD_COMPLEX':
            return{
                ...state.searchParams,
                complexName: action.payload
            }
        case 'ADD_ROOMS':
            return{
                ...state.searchParams,
                roomValues: addRoomsValies(state.searchParams.roomValues, action.payload)
            }
        case 'ADD_SQUARE_MIN':
            console.log(state)
            return{
                ...state.searchParams,
                squareMin: action.payload
            }
        case 'ADD_SQUARE_MAX':
            return{
                ...state.searchParams,
                squareMax: action.payload
            }
        case 'ADD_PRICE_MIN':
            return{
                ...state.searchParams,
                squareMin: action.payload
            }
        case 'ADD_PRICE_MAX':
            return{
                ...state.searchParams,
                priceMax: action.payload
            }
        case 'RESET_FILTER': 
            return{
                priceMin: 1872000,
                priceMax: 8610000,
                squareMin: 38,
                squareMax: 120,
                complexName: "all",
                roomValues:[], 
            }
        default: 
            return state.searchParams
    }
}

export default updateSearchParams
