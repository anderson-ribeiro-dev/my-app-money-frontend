import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize  } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {credits: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`) 
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request //acessar dados dentro de data
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {

    return dispatch => {
       const id = values._id ? values._id : ''
        // console.log(id)
       axios[method](`${BASE_URL}/billingCycles/${id}`, values)
           .then((result) => {
               // console.log(result)
               toastr.success('Sucesso', 'Operacao Realizado com sucesso.')
               //middleware multi
               dispatch(init())
           })
           .catch((err) => {
               err.response.data.errors.forEach(error => {
                   toastr.error('Erro', error)
               });
           })
       
       }

}


export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle) //inicializar formulário
    ]
}


export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle) //inicializar formulário
    ]
}


export function init() {
    return [
       showTabs('tabList', 'tabCreate'),
       selectTab('tabList'),
       getList(), //lista atual
       initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
