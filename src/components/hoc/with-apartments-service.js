import {ApartmentsConsumer} from '../apartments-context'

const withApartmentsService = (Wrapped) => {
    return (props) => {
        return(
            <ApartmentsConsumer>
                {
                    (apartmentsService) => {
                        return(
                            <Wrapped apartmentsService={apartmentsService} {...props}/>
                        )
                    }
                }
            </ApartmentsConsumer>
        )
    }
}

export default withApartmentsService