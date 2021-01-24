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
        const queryString = `http://jsproject.webcademy.ru/items?${this.getSearchParams(props)}`
        const response = await fetch(queryString)
        const data = await response.json()
        return await data
    }

    getItem = async(id) => {
        const queryString = `http://jsproject.webcademy.ru/items/${id}`
        const response = await fetch(queryString)
        const data = await response.json()
        return await data
    }

    submitForm = async(formData) => {
        const queryString = 'http://jsproject.webcademy.ru/bidnew';

        const response = await fetch(queryString, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        return await data;
    }

    getBids = async() => {
        const response = await fetch('http://jsproject.webcademy.ru/bids')
        const data = await response.json()
        return await data
    }
}