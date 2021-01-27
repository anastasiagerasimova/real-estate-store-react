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

const itemsRequested = () => {
    return{
        type: 'FETCH_ITEMS_REQUEST',
    }
}

const itemsError = (value) => {
    return{
        type: 'FETCH_ITEMS_FAILURE',
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

const addedToFavorites = (value) => {
    return{
        type: 'ADD_TO_FAVORITES',
        payload: value
    }
}

const removedFromFavorites = (value) => {
    return{
        type:'REMOVE_FROM_FAVORITES',
        payload: value
    }
}

const bidsLoaded = (value) => {
    return{
        type: 'FETCH_BIDS_SUCCESS',
        payload: value
    }
}

const bidsRequested = () => {
    return{
        type: 'FETCH_BIDS_REQUEST',
    }
}

const bidsError = (value) => {
    return{
        type: 'FETCH_BIDS_FAILURE',
        payload: value
    }
}

const fetchItems = (apartmentsService, location) => () => (dispatch) => {
    dispatch(itemsRequested())
    apartmentsService
        .getItems(location.search)
        .then(result => dispatch(itemsLoaded(result)))
        .catch((error) => dispacth(itemsError(error)))
}

const fetchBids = (apartmentsService) => () => (dispatch) =>{
    dispatch(bidsRequested())
    apartmentsService
        .getBids()
        .then((result) => dispatch(bidsLoaded(result)))
        .catch((error) => dispatch(bidsError(error)))
}

export {
    addedComplex,
    addedRooms,
    addedPriceMin,
    addedPriceMax,
    addedSquareMin,
    addedSquareMax,
    fetchItems,
    setViewType,
    sortedItems,
    resetedFilter,
    addedToFavorites,
    removedFromFavorites,
    fetchBids
}