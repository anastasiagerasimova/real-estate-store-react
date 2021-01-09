const initialState = {
    priceMin: 1872000,
    priceMax: 8610000,
    squareMin: 38,
    squareMax: 120,
    complexName: "all",
    roomValues:[], 
    items: [], 
    viewType: "cards",
    sortby: "priceASC"
}

const addRoomsValies = (arr, value) => {
    if(arr.includes(value)) {
        return [...arr.slice(0, arr.indexOf(value)), ...arr.slice(arr.indexOf(value) + 1)].sort()
    }else{
        return [...arr, value].sort()
    }
}

const sortItems = (items,  value) => {
    switch(value){
        case 'priceASC': {
            return [...items].sort((a, b) => a.price_total - b.price_total)
        }
        case 'priceDESC': {
            return [...items].sort((a, b) => b.price_total - a.price_total)
        }
        case 'squareASC': {
            return [...items].sort((a, b) => a.square - b.square)
        }
        case 'squareDESC': {
            return [...items].sort((a, b) => b.square - a.square)
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_COMPLEX':
            console.log(state)
            return{
                ...state,
                complexName: action.payload
            }
        case 'ADD_ROOMS':
            return{
                ...state,
                roomValues: addRoomsValies(state.roomValues, action.payload)
            }
        case 'ADD_SQUARE_MIN':
            console.log(state)
            return{
                ...state,
                squareMin: action.payload
            }
        case 'ADD_SQUARE_MAX':
            return{
                ...state,
                squareMax: action.payload
            }
        case 'ADD_PRICE_MIN':
            return{
                ...state,
                squareMin: action.payload
            }
        case 'ADD_PRICE_MAX':
            return{
                ...state,
                priceMax: action.payload
            }
        case 'FETCH_ITEMS_REQUEST':
            return{
                ...state,
                items: []
            }
        case 'FETCH_ITEMS_SUCCESS':
            return{
                ...state,
                items: sortItems(action.payload, state.sortby)
            }
        case 'SET_VIEW_TYPE':
            return{
                ...state,
                viewType: action.payload
            }
        case 'SORT_ITEMS': 
            return{
                ...state,
                items: sortItems(state.items, action.payload),
                sortby: action.payload
            }
        case 'RESET_FILTER': 
            return{
                ...state,
                priceMin: 1872000,
                priceMax: 8610000,
                squareMin: 38,
                squareMax: 120,
                complexName: "all",
                roomValues:[], 
            }
        default: 
            return state
    }
}

export default reducer