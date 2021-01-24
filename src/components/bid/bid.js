const Bid = ({bid}) => {
    return (
        <div class="panel panel--no-hover">
            <div class="panel__id">{bid.id}</div>
            <div class="panel__bidname">{bid.name}</div>
            <div class="panel__bidphone">{bid.phone}</div>
        </div>
    )
}

export default Bid