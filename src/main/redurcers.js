import React from 'react'
import {  combineReducers }  from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({ summary: {credit: 100, debt: 50 } })
})

export default rootReducer

