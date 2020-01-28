import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form' //reduxForm == connect - redux, Field - tags
import labelAndInput from '../common/form/labelAndInput'

import { create } from './billingCycleActions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        // console.log(this.props)
        return (
            <form  onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput}
                            label="Nome" cols="12 4" placeholder="Informe o nome"
                        />
                    <Field name='month' component={labelAndInput}
                        type="number" label="Mês" cols="12 4" placeholder="Informe o mês" 
                    />
                    <Field name='year' component={labelAndInput}
                        type="number" label="Ano" cols="12 4" placeholder="Informe o ano"
                    />
                </div>
                <div className='box-footer' >
                    <button type="submit"  className='btn btn-primary' >Submit</button>
                </div>
            </form>
        )
    }
}
// const onSubmit = (values, dispatch) => {

// }
export default  reduxForm({form: 'billingCycleForm' })(BillingCycleForm)
