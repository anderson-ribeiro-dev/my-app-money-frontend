import React, { Component } from 'react'

import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'


class Dashboard extends Component {
    //componente renderizado 
    componentDidMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        const credito = Number(credit).toFixed(2)
        const debito = Number(debt).toFixed(2)
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content> 
                    <Row>
                        <ValueBox cols='12 4 4' color='green'  icon='bank' value={`R$ ${credito}`} text='Total de Créditos' />
                        <ValueBox cols='12 4 4' color='red' icon='credit-card' value={`R$ ${debito}`} text='Total de Débitos' /> 
                        <ValueBox cols='12 4 4' color='blue' icon='money' value={`R$ ${Number(credito - debito).toFixed(2)}`} text='Valor consolidado' /> 
                    </Row>
                </Content>
            </div>
        )
    }
}


const mapStateToProps = state => ({summary: state.dashboard.summary }) //redurcers
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch) //criar uma chamada para todos estados dos reducers da aplicação
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


