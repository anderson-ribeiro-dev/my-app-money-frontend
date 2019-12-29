import React, { Component } from 'react' 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'
 
class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || [] // se props.list === undifined pros.list === null, || recebe []
        return list.map((bc, index) => (
            <tr key={index}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
            </tr>
        ))
    }
    
    render(){
        // console.log(this.props.list)
        //componente de class, usa this
        //componente de função não usa o this
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list }) //pega reducers global main/reducers
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)