const addedComplex = (value) => {
    return{
        type: 'ADD_COMPLEX',
        payload: value,
    }
}

const addedRooms = (value) => {
    return{
        type: 'ADD_ROOMS',
        payload: value
    }
}

const addedPriceMin = (value) => {
    return{
        type: 'ADD_PRICE_MIN',
        payload: value
    }
}

const addedPriceMax = (value) => {
    return{
        type: 'ADD_PRICE_MAX',
        payload: value
    }
}

const addedSquareMin = (value) => {
    return{
        type: 'ADD_SQUARE_MIN',
        payload: value
    }
}

const addedSquareMax = (value) => {
    return{
        type: 'ADD_SQUARE_MAX',
        payload: value
    }
}

const itemsLoaded = (value) => {
    return{
        type: 'FETCH_ITEMS_SUCCESS',
        payload: value
    }
}

const setViewType = (value) => {
    return{
        type: 'SET_VIEW_TYPE',
        payload: value
    }
}

const sortedItems = (value) => {
    return{
        type: 'SORT_ITEMS',
        payload: value
    }
}

const resetedFilter = () => {
    return{
        type: 'RESET_FILTER'
    }
}

export {
    addedComplex,
    addedRooms,
    addedPriceMin,
    addedPriceMax,
    addedSquareMin,
    addedSquareMax,
    itemsLoaded,
    setViewType,
    sortedItems,
    resetedFilter
}