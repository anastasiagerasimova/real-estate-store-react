import updateSearchParams from './search-params'
import updateItemList from './item-list'
import updateBidList from './bid-list'

const reducer = (state, action) => {
    return{
        searchParams: updateSearchParams(state, action),
        itemList: updateItemList(state, action),
        bidList: updateBidList(state, action)
    }
}

export default reducer