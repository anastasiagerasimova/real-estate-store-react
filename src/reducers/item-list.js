const removeFromFavorites = (favorites, item) => {
    const index = favorites.findIndex(favorite => favorite.id === item.id)
    return [...favorites.slice(0, index), ...favorites.slice(index + 1)]
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

const updateItemList = (state, action) => {
    if(state === undefined){
        return {
            items: [], 
            itemsLoading: true, 
            itemsError: false,
            viewType: "cards",
            sortby: "priceASC",
            favorites: []
        }
    }
    switch(action.type){
        case 'FETCH_ITEMS_REQUEST':
            return{
                ...state.itemList,
                items: [],
                itemsLoading: true,
                itemsError: null
            }
        case 'FETCH_ITEMS_SUCCESS':
            return{
                ...state.itemList,
                items: sortItems(action.payload, state.itemList.sortby),
                itemsLoading: false,
                itemsError: null
            }
        case 'FETCH_ITEMS_FAILURE':
            return{
                ...state.itemList,
                items: [],
                itemsLoading: false,
                itemsError: action.payload
            }
        case 'SET_VIEW_TYPE':
            return{
                ...state.itemList,
                viewType: action.payload
            }
        case 'SORT_ITEMS': 
            return{
                ...state.itemList,
                items: sortItems(state.itemList.items, action.payload),
                sortby: action.payload
            }
        case 'ADD_TO_FAVORITES':
            return {
                ...state.itemList,
                favorites: [...state.itemList.favorites, action.payload]
            }
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state.itemList,
                favorites: removeFromFavorites(state.itemList.favorites, action.payload)
            }
        default: 
            return state.itemList
    }
}

export default updateItemList