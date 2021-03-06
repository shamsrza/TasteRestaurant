import axios from 'axios'

const BASE_URL = 'http://localhost:36540/api/';

export const ENDPOINTS = {
    FOODITEM: 'FoodItem',
    ORDER: 'Order',
    RESERVATION: 'Reservation'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll:() => axios.get(url),
        fetchById: id => axios.get(url + id),
        fetchByDate: date => axios.get(url + date),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
}