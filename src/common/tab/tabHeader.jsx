import React, { Component } from 'react'
import { bindActionCreators }  from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

class TabHeader extends Component {
    render(){
        let selected = this.props.tab.selected.payload === this.props.target //target=> estado global
        return (
            <li className={selected ? 'active' : ''}>
                <a href="javascript:;" //ignora qualquer click
                    data-toggle="tab"
                    onClick={() => this.props.selectTab(this.props.target)} //id do conteúdo 
                    data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)