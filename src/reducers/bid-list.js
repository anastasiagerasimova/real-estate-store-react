const updateBidList = (state, action) => {
    if(state === undefined){
        return {
            bids: [],
            bidsLoading: true, 
            bidsError: false,
            pages: 10
        }
    }
    switch(action.type){
        case 'FETCH_BIDS_SUCCESS':
            return{
                ...state.bidList,
                bids: action.payload,
                bidsLoading: false,
                bidsError: null
            }
        case 'FETCH_BIDS_REQUEST':
            return{
                ...state.bidList,
                bids: [],
                bidsLoading: true,
                bidsError: null
            }
        case 'FETCH_BIDS_FAILURE':
            return{
                ...state.bidList,
                bids: [],
                bidsLoading: false,
                bidsError: action.payload
            }
        default: 
            return state.bidList
    }
}

export default updateBidList