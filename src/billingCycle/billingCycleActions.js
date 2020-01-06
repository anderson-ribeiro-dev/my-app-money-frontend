import axios from 'axios'
import billingCycle from './billingCycle'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`) 
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request //acessar dados dentro de data
    }
}

export function create(values) {
    // console.log("Aqui", values)
    axios.post(`${BASE_URL}/billingCycles`, values)
    return {
        type: 'TEMP'
    }
}