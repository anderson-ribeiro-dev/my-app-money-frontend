import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize  } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`) 
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request //acessar dados dentro de data
    }
}

export function create(values) {
    // console.log("Aqui", dispatch)
     return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
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


export function init() {
    return [
       showTabs('tabList', 'tabCreate'),
       selectTab('tabList'),
       getList(), //lista atual
       initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
