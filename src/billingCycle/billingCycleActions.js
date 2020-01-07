import axios from 'axios'
import billingCycle from './billingCycle'
import { toastr } from 'react-redux-toastr'

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
        .then((result) => {
            toastr.success('Sucesso', 'Operacao Realizado com sucesso.')
        }).catch((err) => {
            err.response.data.errors.forEach(error => {
                toastr.error('Erro', error)
            });
        });
    return {
        type: 'TEMP'
    }
}