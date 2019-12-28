import axios from 'axios'

const BASE_URL = 'https://localhost:3003/api'

export function getList(params) {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request //acessar dados dentro de data
    }
}