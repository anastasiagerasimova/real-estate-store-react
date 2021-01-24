const Bid = ({bid}) => {
    return (
        <div className="panel panel--no-hover">
            <div className="panel__id">{bid.id}</div>
            <div className="panel__bidname">{bid.name}</div>
            <div className="panel__bidphone">{bid.phone}</div>
        </div>
    )
}

export default Bid