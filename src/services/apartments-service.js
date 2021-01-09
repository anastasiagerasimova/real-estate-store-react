export default class ApartmentsService{

    getSearchParams = (props) => {
        const searchParams = new URLSearchParams;
        const {complex, rooms, sqmin, sqmax, pricemin, pricemax} = props
        const params = {complex, rooms, sqmin, sqmax, pricemin, pricemax}
        Object.keys(params).forEach(item => {
            if(params[item].toString() !== '') searchParams.append(item, params[item])
        })
        return searchParams.toString()
    }

    getItems = async(props) => {
        console.log(this.getSearchParams(props))
        const queryString = `http://jsproject.webcademy.ru/items?${this.getSearchParams(props)}`
        const response = await fetch(queryString)
        const data = await response.json()
        return await data
    }
}